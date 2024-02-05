/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dashboard.html',  // Path to your HTML file
    './HousingPriceIndex.html',
    './RealEstate.html',
    './MortgageBoard.html',
    './src/**/*.js', // Path to your JavaScript files
    './src/**/*.css', // Path to your CSS files
  ],
  theme: {
    extend: {},
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

