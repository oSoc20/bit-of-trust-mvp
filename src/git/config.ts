import http from "isomorphic-git/http/node";
import fs from "@isomorphic-git/lightning-fs";

export let gitOpts = {
  fs, http,
  corsProxy: 'https://cors.isomorphic-git.org',
  url: 'https://lesderid.net/bit-of-trust.git',
  dir: 'repo'
};
