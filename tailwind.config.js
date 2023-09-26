/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts}",
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#072139',
          'back': '#F3F3F3',
          'orange': '#E38E29',
          'lightBlue': '#4e8ac2'
        },
      },
    },
    plugins: [],
  }
