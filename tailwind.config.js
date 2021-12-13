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
      },
      fontFamily: {
        fira: ["Fira Mono", ...defaultTheme.fontFamily.mono],
        poppins: ["Poppins", ...defaultTheme.fontFamily.serif],
      },
      boxShadow: {
        custom: "0px 7px 14px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
