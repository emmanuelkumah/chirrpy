/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondary: ["Barlow", "sans-serif"],
        heading: ["Merriweather Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
