/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily:{
        take:"serif"
      },
      colors:{
      primary:"#fea928",
      secondary:"#ed8900",

      },
      container:{
        center:true,
        padding:{
          DEFUALT: '1rem',
          sm:"3rem",
        }
      }

    },
  },
  plugins: [],
}

