/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],

  theme: {
    screens: {
      sm: "640px",
      tablet: "976px",
      xxsm: "144px",
      mid: "525px",
      "side-nav": "100px",
      footer: "552px",
      banw: "935px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "secondary-bg": "#1F2937",
        "body-dark": "#111827",

        blog: "#334155",
        card: "#1E293B",
        heading: "#C084FC",
        darkHeading: "#7E22CE",
        subHeading: "rgb(156 163 175)",
        testimonial: "#D1D5D2",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [flowbite.plugin(), require("tailwind-scrollbar-variants")],
};
