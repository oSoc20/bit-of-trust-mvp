import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import alias from '@rollup/plugin-alias';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import { routify } from '@sveltech/routify';
import autoPreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';

const production = !process.env.ROLLUP_WATCH;

export default [
  {
    input: 'src/main.js',
    output: {
      sourcemap: !production,
      format: 'esm',
      name: 'app',
      dir: 'public/bundle'
    },
    plugins: [
      alias({
        entries: [{ find: '@', replacement: `${__dirname}/src` }]
      }),
      routify({
        singleBuild: production,
        dynamicImports: true
      }),
      svelte({
        preprocess: autoPreprocess({
          postcss: true
        }),
        // enable run-time checks when not in production
        dev: !production,
        // we'll extract any component CSS out into
        // a separate file - better for performance
        css: (css) => {
          css.write('public/bundle/bundle.css');
        }
      }),

      commonjs(),
      nodePolyfills(),
      resolve({
        browser: true,
        dedupe: (importee) => !!importee.match(/svelte(\/|$)/),
        external: ['buffer']
      }),

      typescript({ sourceMap: !production }),

      !production && serve(),
      !production && livereload('public'),
      production && terser(),

      replace({
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      })
    ],
    watch: {
      clearScreen: false
    }
  }
];

function serve() {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true
        });
      }
    }
  };
}
