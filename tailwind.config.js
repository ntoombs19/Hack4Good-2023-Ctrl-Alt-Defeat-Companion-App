/** @type {import('tailwindcss').Config} */
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
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

