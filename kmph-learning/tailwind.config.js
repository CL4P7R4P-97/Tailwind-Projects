/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "secondary-bg": "#1F2937",
        "body-dark": "#111827",
        card: "#1E293B",
        subHeading: "rgb(156 163 175)",
        testimonial: "#D1D5D2",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
