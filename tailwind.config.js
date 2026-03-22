/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#005f7e",
        "primary-dark": "#004a63",
        "accent": "#009688",
        "background-light": "#f8f9fa",
        "background-dark": "#101922",
        "card-light": "#ffffff",
        "card-dark": "#1a2632",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "2xl": "2rem",
        "full": "9999px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
