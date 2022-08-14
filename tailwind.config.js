/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'pop': ['Poppins'],
        'san': ['Roboto Condensed']
      },
      backgroundColor: {
        'nav': ['rgb(11, 68, 54)'],
        'nav2': ['rgb(3, 75, 39)'],
        'nav3': ['rgb(20, 86, 87)']
      },
      colors: {
        'green': ['rgb(26, 243, 127)'],
        'green2': ['rgb(94, 235, 186) ']
      }
    },
  },
  plugins: [],
}
