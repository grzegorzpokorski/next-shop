const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: {
        fontFamily: {
          sans: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
