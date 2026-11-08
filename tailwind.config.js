/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./App.js",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],

  presets: [require("nativewind/preset")],

  theme: {
    extend: {
      colors: {
        primary: "#A78BFA",
        background: "#080817",
        surface: "#15152A",
      },
    },
  },

  plugins: [],
};