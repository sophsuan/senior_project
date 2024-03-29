/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/**/*.{html, js, tsx}",
    "./public/**/*.{html, js, tsx}",
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      width: {
        "80%": "80%",
        "90%": "90%"
      }
    },
    colors: {
      "main-bg": "#DF7E74",
      "secondary-bg": "#F9AE91",
      white: colors.white,
      black: colors.black,
      blue: colors.blue,
      slate: colors.slate,
      stone: colors.stone,
      green: colors.green,
      yellow: colors.yellow,
      gray: colors.gray,
      "logs-green": "#8DC692",
      "btn-red": {
        DEFAULT: "#DF7E74",
        dark: "#BA6A62"
      },
      "btn-yellow": {
        DEFAULT: "#F5BF6D",
        dark: "#D39A42"
      },
      "btn-green": {
        DEFAULT: "#8DC692",
        dark: "#70A175"
      }
    }
  },
  plugins: []
};
