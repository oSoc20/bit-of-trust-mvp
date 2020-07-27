import http from "isomorphic-git/http/web";
import LightningFS from "@isomorphic-git/lightning-fs";

const fs = new LightningFS('fs')

export let gitOpts = {
  fs, http,
  corsProxy: 'https://cors.isomorphic-git.org',
  url: 'https://lesderid.net/bit-of-trust.git',
  dir: '/data/'
};
