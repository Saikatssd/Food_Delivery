/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage:{
      //   'hero-pattern':"url('/public/template.jpeg')",
      // },
      fontFamily:{
        poppins:["poppins","sans-serif"],
      },
      height:{
        "1/10":"10%",
        "9/10":"90%",
      },
      backgroundColor:{
        "app-black":"#121212"
      }
    },
  },
  plugins: [],
}