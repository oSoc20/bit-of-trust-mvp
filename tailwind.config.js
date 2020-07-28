/* eslint-env node */
module.exports = {
  purge: ['./src/**/*.svelte'],
  theme: {
    fontFamily: {
      sans:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'
    },
    extend: {
      colors: {
        gray: {
          '100': '#e5e5e5',
        }
      }}
  },
  variants: {},
  plugins: []
};
