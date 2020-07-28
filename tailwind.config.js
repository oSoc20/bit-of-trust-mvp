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
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
        }
      }}
  },
  variants: {},
  plugins: []
};
