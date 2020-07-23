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

async function addTokensToRelationship(tokens: Array<Token>, relationship: string): Promise<void> {
    let gitOpts = {
        fs, http,
        corsProxy: 'https://cors.isomorphic-git.org',
        url: 'https://lesderid.net/bit-of-trust.git',
        dir: 'repo'
    };

    await git.clone({noCheckout: true, ...gitOpts});

    try {
        try {
            await git.fetch({ref: relationship, ...gitOpts});
        } catch {
            // branch doesn't exist on remote
        }

        // branch doesn't exist on remote, but we might have it locally
        await git.checkout({ref: relationship, ...gitOpts});
    } catch (e) {
        // branch doesn't exist on remote nor locally

        await git.checkout({ref: "dummy", ...gitOpts});
        await git.branch({
            ref: relationship,
            checkout: true,
            ...gitOpts
        });
    }

    let files = await git.listFiles({ref: relationship, ...gitOpts});
    let path = gitOpts.dir + '/' + relationship;
    let fileChanged = false;
    if (!files.includes(relationship)) {
        await fs.promises.writeFile(path, "");
        fileChanged = true;
    }

    let lines = (await fs.promises.readFile(path)).toString().split('\n');
    for (let token of tokens) {
        if (!lines.includes(tokenToString(token))) {
            await fs.promises.appendFile(path, tokenToString(token) + '\n');
            fileChanged = true;
        }
    }

    if (!fileChanged) {
        //TODO: return something useful
        return;
    }

    await git.remove({filepath: ".", ...gitOpts});
    await git.add({filepath: relationship, ...gitOpts});

    let hash = await git.commit({
        author: {
            name: 'Bit of Trust System',
            email: 'system@bit-of-trust',
        },
        message: "Add member(s) to relationship",
        ...gitOpts
    });

    let pushResult = await git.push({...gitOpts});
    //TODO: check if push was successful
}

let tokens = [createToken(), createToken()];
let relationship = "my-relationship";

addTokensToRelationship(tokens, relationship)
    .then(() => {
        console.log("main() ended");
    })
    .catch(e => {
        console.log("caught from main(): " + e);
    });
