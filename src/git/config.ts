import http from "isomorphic-git/http/web";
import LightningFS from "@isomorphic-git/lightning-fs";

const fs = new LightningFS('fs')

export let gitOpts = {
  fs, http,
  url: 'https://lesderid.net/bit-of-trust.git',
  dir: '/data/',
  author: {
    name: 'Bit of Trust System',
    email: 'system@bit-of-trust',
  },
};

//HACK HACK HACK
export let inviteBaseUrl = 'https://bit-of-trust.osoc.be/Invite/';
