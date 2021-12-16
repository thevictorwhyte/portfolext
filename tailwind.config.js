const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#041A30",
        secondary: "#F93943",
        tertiary: "#05203C",
        whiteone: "#CCD6F6",
        whitetwo: "#8892B0",
      },
      fontFamily: {
        fira: ["Fira Mono", ...defaultTheme.fontFamily.mono],
        poppins: ["Poppins", ...defaultTheme.fontFamily.serif],
      },
      boxShadow: {
        custom: "0px 7px 14px rgba(0, 0, 0, 0.25)",
        featuredProject: "4px 4px 16px rgba(0, 0, 0, 0.25)",
      },
    },
    screens: {
      xs: "425px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
