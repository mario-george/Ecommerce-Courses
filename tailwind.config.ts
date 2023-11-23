/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,jsx.ts,tsx}",
    "./components/*.{js,jsx.ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans will overwrite the def font

        sans: ["var(--font-exo2)", "sans-serif"],
        // sans-serief as a fallback
        orbitron: ["var(--font-orbitron)", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
});
