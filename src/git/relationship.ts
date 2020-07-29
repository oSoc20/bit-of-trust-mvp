import git from "isomorphic-git";

import {gitOpts} from "./config";
import type {Token} from "./token";
import {stringToToken, tokenToString} from "./token";
import type {InviteSecret} from "./invitedata";

const {fs} = gitOpts;

export type RelationshipName = string;

//TODO: this is turning into a god object => should be split
export class Relationship {
  private changed: boolean = false;
  private unpushedChanges: boolean = false;

  private get path(): string {
    return gitOpts.dir + '/' + this.name;
  }

  async getHash(): Promise<string> {
    return await git.resolveRef({ref: this.name, ...gitOpts});
  }

  private constructor(public name: RelationshipName) {
  }

  private static async ensureCloned(): Promise<void> {
    try {
      await fs.promises.readdir(gitOpts.dir);
    } catch {
      console.log("cloning");
      await git.clone({noCheckout: true, ...gitOpts});
    }
  }

  static async get(name: RelationshipName): Promise<Relationship | null> {
    await this.ensureCloned();
    try {
      try {
        await git.fetch({ref: name, ...gitOpts});
      } catch {
        // branch doesn't exist on remote
      }

      // branch doesn't exist on remote, but we might have it locally
      await git.checkout({ref: name, ...gitOpts});
    } catch (e) {
      // branch doesn't exist on remote nor locally
      return null;
    }
    return new Relationship(name);
  }

  static async create(name: RelationshipName): Promise<Relationship> {
    //TODO: check if relationship already exists

    await this.ensureCloned();

    await git.checkout({ref: "dummy", ...gitOpts});
    await git.branch({
      ref: name,
      checkout: true,
      ...gitOpts
    });
    return new Relationship(name);
  }

  static async getAll(): Promise<Array<Relationship>> {
    await this.ensureCloned();

    let branches = await git.listBranches({remote: 'origin', ...gitOpts});

    return Promise.all(
      branches.filter(b => b != "HEAD" && b != "dummy")
        .map(async n => await Relationship.get(n))
    );
  }

  private async isCheckedOut(): Promise<boolean> {
    let currentBranch = await git.currentBranch({...gitOpts});
    return currentBranch == this.name;
  }

  private async ensureCheckedOut(): Promise<void> {
    if (!await this.isCheckedOut()) {
      await git.checkout({ref: this.name, ...gitOpts});
    }
  }

  private async ensureFileExists(): Promise<void> {
    await this.ensureCheckedOut();

    let files = await git.listFiles({ref: this.name, ...gitOpts});
    if (!files.includes(this.name)) {
      await fs.promises.writeFile(this.path, "");
      this.changed = true;
    }
  }

  private async tryPull(): Promise<void> {
    await git.pull({ref: this.name, singleBranch: true, ...gitOpts});
  }

  async getTokens(): Promise<Array<Token>> {
    await this.ensureFileExists();

    let lines = (await fs.promises.readFile(this.path, 'utf8')).split('\n');
    return lines
      .filter(l => l.length > 0)
      .map(l => new Uint8Array(l
        .match(/.{1,2}/g)
        .map(byte => parseInt(byte, 16))));
  }

  private async includesToken(token: Token): Promise<boolean> {
    let tokens = await this.getTokens();
    return tokens.includes(token);
  }

  async addToken(token: Token): Promise<boolean> {
    await this.tryPull();

    if (await this.includesToken(token)) return false;

    let newContents = await fs.promises.readFile(this.path, 'utf8') + tokenToString(token) + '\n';
    await fs.promises.writeFile(this.path, newContents);
    this.changed = true;

    return true;
  }

  async commitChanges(inviteSecret: InviteSecret = null): Promise<boolean> {
    if (!this.changed) {
      return false;
    }

    await git.remove({filepath: ".", ...gitOpts});
    await git.add({filepath: this.name, ...gitOpts});

    let commitMessage = "Add member(s) to relationship";

    if (inviteSecret !== null) {
      commitMessage += "\n\n";
      commitMessage += "Invite: " + inviteSecret;
    }

    await git.commit({
      message: commitMessage,
      ...gitOpts
    });

    this.unpushedChanges = true;

    return true;
  }

  async push(): Promise<boolean> {
    //TODO: don't return false?
    if (!this.unpushedChanges) return false;

    try {
      await git.push({...gitOpts});
    } catch (error) {
      console.log("fatal push error: ", error);
      return false;
    }

    return true;
  }

  static async findCommitOfToken(hash: any, tokenString: string) {
    let commits = await git.log({depth: 100, ref: hash, ...gitOpts});
    commits.reverse();
    let walkers = commits.map(c => git.TREE({ref: c.commit.tree, ...gitOpts}));
    let walk = await git.walk({
      trees: walkers,
      map: async (filepath, stuff) => {
        for (let i = 0; i < stuff.length; i++) {
          let t = stuff[i];
          if (t == null) continue;
          let content = await t.content();
          if (content instanceof Uint8Array) {
            let textContent = new TextDecoder().decode(content);
            if (textContent.includes(tokenString)) {
              return commits[i].oid;
            }
          }
        }
      },
      ...gitOpts
    });
    return walk[0];
  }
}

export default Relationship;
