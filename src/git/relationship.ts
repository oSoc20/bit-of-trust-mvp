import git from "isomorphic-git";
import fs from "@isomorphic-git/lightning-fs";

import {gitOpts} from "./config";
import type {Token} from "./token";
import {tokenToString} from "./token";

type RelationshipName = string;

class Relationship {
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

  static async get(name: RelationshipName, createIfNew: boolean = false): Promise<Relationship> {
    await git.clone({noCheckout: true, ...gitOpts});

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

      if (createIfNew) {
        await git.checkout({ref: "dummy", ...gitOpts});
        await git.branch({
          ref: name,
          checkout: true,
          ...gitOpts
        });
      } else {
        return null;
      }
    }
    return new Relationship(name);
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

  async getTokens(): Promise<Array<Token>> {
    await this.ensureFileExists();

    let lines = (await fs.promises.readFile(this.path)).toString().split('\n');
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
    if (await this.includesToken(token)) return false;

    await fs.promises.appendFile(this.path, tokenToString(token) + '\n');
    this.changed = true;

    return true;
  }

  async commitChanges(): Promise<boolean> {
    if (!this.changed) {
      return false;
    }

    await git.remove({filepath: ".", ...gitOpts});
    await git.add({filepath: this.name, ...gitOpts});

    await git.commit({
      author: {
        name: 'Bit of Trust System',
        email: 'system@bit-of-trust',
      },
      message: "Add member(s) to relationship",
      ...gitOpts
    });

    this.unpushedChanges = true;

    return true;
  }

  async push(): Promise<boolean> {
    //TODO: don't return false?
    if (!this.unpushedChanges) return false;

    let pushResult = await git.push({...gitOpts});

    //TODO: check if this is correct
    return pushResult.ok != undefined;
  }
}

export default Relationship;
