/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.hmtl", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purplePink: "#a77880",
        creamWhite: "#fffcf7",
      },
      screens: {
        "sm-mid": "400px",
      },
      fontFamily: {
        Lato: "Lato",
        Dancing: "Dancing Script",
      },
      boxShadow: {
        shiny: "0px 0px 51px 4px rgba(240,240,240,0.58)",
        "inset-shiny": "inset 0px 0px 60px -8px rgba(240,240,240,0.42)",
      },
      gridTemplateColumns: {
        "sm-mid": "repeat(1, 1fr)",
        mid: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      },
    },
  },
  plugins: [],
};

//! Customize and apply custom mobile screen
