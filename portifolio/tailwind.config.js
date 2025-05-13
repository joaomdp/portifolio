/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#222831",
        secondary: "#64ffda",
        tertiary: "#8892b0",
        light: "#FFFDF6",
        cream: "#FFFDF6",
        lightGray: "#FFFDF6",
        darkGray: "#222831",
        accent: "#d4b483",
      },
    },
  },
  plugins: [],
};
