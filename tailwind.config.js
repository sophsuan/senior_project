/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html, js, tsx}",
            "./public/**/*.{html, js, tsx}",
            "./public/index.html",
            "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
        'main-bg': '#DF7E74',
        'secondary-bg': '#F9AE91',
        'white': colors.white,
        'black': colors.black,
        'red': colors.red,
        'blue': colors.blue,
        'btn-yellow': 'FBF7BF'
    },
  },
  plugins: [],
}
