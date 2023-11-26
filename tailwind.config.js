/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#6E58E0",
        secondary: "#191527",
        lightwhite: "#f4f7ff",
      },
    },
  },
  plugins: [],
};
