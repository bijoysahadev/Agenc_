/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    fontFamily: {
        'inter': ["Inter","sans-serif" ],
      },
    colors: {
        'primnary': '#6A4DF4',
        'secondary': '#737373',
        'black': "#151515"
      },
      maxWidth : {
        "container": "1320px",
      },
  
    },
  },
  plugins: [],
}
