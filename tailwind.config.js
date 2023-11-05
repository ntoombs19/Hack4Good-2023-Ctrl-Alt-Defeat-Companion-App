/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports =  {
  content: [],
  theme: {
    extend: {
      colors: {
        'dark-green': '#20421d',
        'light-green': '#56a345',
        'custom-grey': '#dfdfdf',
        'dark-green-hover': '#346a2f'
      },
      fontFamily: {
        'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

