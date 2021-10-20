const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit", // ⚠ Make sure to have this
  purge: ["./src/**/*.svelte"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      dark: "#023047",
      light_dark: "#9DC2D5",
      navbar: "#093951",
      accent: "#FB8500",
      banner: "#295E79",
      author: "#7395A5",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
