/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#16202A",
        secondary: "#93FFEF",
        other: "#F0F0F0"
      },
      fontFamily: {
        "cursive": 'Righteous',
        "fatface": 'Abril Fatface',
        "montserrat": 'Montserrat',
        "lato": 'Lato'
      },
      
    },
  },
  plugins: [],
}
