/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/dist/esm/**/*.mjs",
  ],
  theme: {
    extend: {
      animation: {
        kenburns: "kenburns 12s ease-in-out infinite",
      },
      keyframes: {
        kenburns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.06)" },
        },
      }
    },
  },
  plugins: [
    require("flowbite/plugin"),
  ],
};
