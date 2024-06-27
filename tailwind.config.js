/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      "sm": "640px",

      "md": "768px",

      "lg": "1024px",
    
      "xl": "1280px",

      "2xl": "1536px",
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

