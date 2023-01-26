/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html, js, tsx}",
            "./public/**/*.{html, js, tsx}",
            "./public/index.html",
            "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        '80%' : '80%',
        '90%' : '90%'
      }
    },
    colors: {
        'main-bg': '#DF7E74',
        'secondary-bg': '#F9AE91',
        'white': colors.white,
        'black': colors.black,
        'red': colors.red,
        'blue': colors.blue,
        'slate': colors.slate,
        'stone': colors.stone,
        'yellow': colors.yellow,
        'btn-yellow': 'FBF7BF'
    },
  },
  plugins: [],
}
