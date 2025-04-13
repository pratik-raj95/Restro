/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable dark mode with class-based toggling
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f97316", // Fixed typo from "#f973116" to "#f97316"
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem", // Fixed key from "default" to "DEFAULT"
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
