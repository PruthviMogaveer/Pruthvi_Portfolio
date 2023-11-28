/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#6E58E0",
        primaryhover: "#8170db",
        secondary: "#191527",
        lightwhite: "#f4f7ff",
      },
      boxShadow: {
        menu: " 0px -1px 30px -18px rgba(0,52,196,1)",
        darkmenu: "0px -1px 30px -18px rgba(247,249,255,1)",
        educationbox: "0px 5px 15px rgba(0, 0, 0, 0.35) ",
      },
    },
  },
  plugins: [],
};
