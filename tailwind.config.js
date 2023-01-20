/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "500px",
      md: "850px",
      lg: "1020px",
      xl: "1200px",
      "2xl": "1440px",
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      transparent: "transparent",
      success: {
        50: "#ECFDF3",
        700: "#027A48",
      },
      primary: {
        50: "#F9F5FF",
        300: "#D6BBFB",
        500: "#9E77ED",
        600: "#7F56D9",
        700: "#6941C6",
        800: "#53389E",
      },
      gray: {
        50: "#F9FAFB",
        100: "#F2F4F7",
        200: "#EAECF0",
        300: "#D0D5DD",
        500: "#667085",
        600: "#475467",
        700: "#344054",
        800: "#1D2939",
        900: "#101828",
      },
    },
    fontSize: {
      sm: ["12px", {lineHeight: "18px"}],
      md: ["14px", {lineHeight: "20px"}],
      base: ["16px", {lineHeight: "24px"}],
      lg: ["18px", {lineHeight: "28px"}],
      xl: ["30px", {lineHeight: "38px"}],
      "2xl": ["60px", {lineHeight: "73px"}],
    },
    boxShadow: {
      100: `0px 1px 2px rgba(16, 24, 40, 0.05)`,
      200: `0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)`,
    },
    fontFamily: {
      inter: ["'Inter'", "sans-serif"],
    },
  },
  plugins: [],
};
