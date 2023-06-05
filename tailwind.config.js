/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
    colors:{
      ...colors,
      'primary': '#20CE94',
      'primary-dark': '#2BBE8D',
      'primary-light': 'rgba(43, 190, 141, 0.15)',
      'secondary': '#323130',
      'active-color': '#8577E6',
      'border-color': '#F5F5F5',
      'bg_gray': '#DCDEE3'
    }
  },
  plugins: [],
};
