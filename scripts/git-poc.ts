import {Crypto} from "@peculiar/webcrypto";

let crypto = new Crypto();

import git from "isomorphic-git";
import * as fs from "fs";
import http from "isomorphic-git/http/node";

type Token = Uint8Array;
const TokenSize = 16;

function createToken(): Token {
    let token = new Uint8Array(TokenSize);
    crypto.getRandomValues(token);
    return token;
}

function tokenToString(token: Token): string {
    return Buffer.from(token).toString('hex');
}

async function main(): Promise<void> {
    //inputs:
    let tokenA = createToken();
    let tokenB = createToken();
    let relationship = "my-relationship";

    console.log(`adding token A (${tokenToString(tokenA)}) `
        + `and token B (${tokenToString(tokenB)}) `
        + `to relationship '${relationship}'`);

    let gitOpts = {
        fs, http,
        corsProxy: 'https://cors.isomorphic-git.org',
        url: 'https://lesderid.net/bit-of-trust.git',
        dir: 'repo'
    };

    console.log("cloning");
    await git.clone({...gitOpts, ...{noCheckout: true}});

    try {
        console.log("fetching");
        try {
            await git.fetch({...gitOpts, ...{ref: relationship}});
        } catch {
            console.log("branch doesn't exist on remote");
        }

        // branch doesn't exist on remote, but we might have it locally
        console.log("checking out branch");
        await git.checkout({...gitOpts, ...{ref: relationship}});
    } catch (e) {
        // branch doesn't exist on remote nor locally

        console.log("creating branch");
        await git.branch({
            ...gitOpts, ...{
                ref: relationship,
                checkout: true
            }
        });
    }

    let files = await git.listFiles({...gitOpts, ...{ref: relationship}});
    //console.log(files);
    let path = gitOpts.dir + '/' + relationship;
    let fileChanged = false;
    if (!files.includes(relationship)) {
        console.log("file doesn't exist yet, creating");
        await fs.promises.writeFile(path, "");
        fileChanged = true;
    }

    let lines = (await fs.promises.readFile(path)).toString().split('\n');
    if (!lines.includes(tokenToString(tokenA))) {
        await fs.promises.appendFile(path, tokenToString(tokenA) + '\n');
        fileChanged = true;
    }
    if (!lines.includes(tokenToString(tokenB))) {
        await fs.promises.appendFile(path, tokenToString(tokenB) + '\n');
        fileChanged = true;
    }

    if (!fileChanged) {
        console.log("tokens already exist in relationship!");
        return;
    }

    console.log("adding");
    await git.add({...gitOpts, ...{filepath: relationship}});

    console.log("committing");
    let hash = await git.commit({
        ...gitOpts, ...{
            author: {
                name: 'Bit of Trust System',
                email: 'system@bit-of-trust',
            },
            message: "Add member(s) to relationship"
        }
    });
    console.log(`hash: ${hash}`);

    console.log("pushing");
    let pushResult = await git.push({...gitOpts});
    console.log(`pushResult: ${pushResult}`);
}

main()
    .then(() => {
        console.log("main() ended");
    })
    .catch(e => {
        console.log("caught from main(): " + e);
    });
