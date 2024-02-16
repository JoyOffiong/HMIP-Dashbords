/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './Dashboards/dashboard.html',  // Path to your HTML file
    './HousingPriceIndex.html',
    './RealEstate.html',
    './MortgageBoard.html',
    './PropertyPages/HousingData.html',
    './PropertyPages/PropertyInfo.html',
    './PropertyPages/MarketDirectory1.html',
    './PropertyPages/DetailedMortgagaCalculator.html',
    './PropertyPages/MarketDirectory2.html',
    './src/**/*.js', // Path to your JavaScript files
    './src/**/*.css', // Path to your CSS files
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

