/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      primary: {
        100: "#FFFFFF",
        200: "#363738",
      },
      secondary: {
        100: "#F5F5F5",
        200: "#FEFAF1",
        300: "#DB4444",
      },
      button: {
        100: "#00FF66",
        200: "#DB4444",
      },
      text: {
        100: "#FAFAFA",
        200: "#7D8184",
        300: "#000000",
      },
      hoverButton: {
        100: "#E07575",
        200: "#A0BCE0",
      },
      background: {
        100: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
