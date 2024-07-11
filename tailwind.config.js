/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      "smx": "375px",

      "sm": "425px",

      "md": "768px",

      "lg": "1024px",
    
      "xl": "1440px",

      "2xl": "2560px",

    },
    container: {
      center:true
    },

    extend: {

      fontFamily:{

        Poppins :["Poppins-Medium", "sans"],
        Poppins_bold:["Poppins-Bold", "sans"],
        Poppins_normal:["Poppins-Normal", "sans"]
    }

    },
  },
  plugins: [],
}

