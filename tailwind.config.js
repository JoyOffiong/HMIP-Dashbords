/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.css', // Path to your CSS files
    './src/**/*.html', // Path to your CSS files
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'confortaa': ['Comfortaa', 'sans-serif'],
      },
    },
    screens: {
      'md': '768px', // Medium screens
      'lg': '1024px', // Large screens
      'xl': '1280px', // Extra-large screens
    },
  },
plugins: [
  // ...
  require('tailwindcss'),
  require('autoprefixer'),
  // ...
  ]
}

