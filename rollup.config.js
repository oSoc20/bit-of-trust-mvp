/* eslint-env node */
import { createRollupConfigs } from './scripts/createBaseRollup.js';
import autoPreprocess from 'svelte-preprocess';

const production = !process.env.ROLLUP_WATCH;

export const config = {
  staticDir: 'public',
  distDir: 'dist',
  buildDir: 'dist/build',
  serve: !production,
  production,
  rollupWrapper: (rollup) => rollup,
  svelteWrapper: (svelte) => {
    svelte.preprocess = [autoPreprocess({ postcss: true })];
  }
};

const configs = createRollupConfigs(config);

export default configs;
