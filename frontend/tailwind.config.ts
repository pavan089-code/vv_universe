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
      },
      colors: {
        void: "#000F26",
        navy: "#071B3A",
        card: "#0F2A52",

        gold: "#C6A75E",
        goldHover: "#B8954F",

        textPrimary: "#F5F7FA",
        textBody: "#B8C4D9",

        borderNavy: "#1B3B6F"
      }
    },
  },
  plugins: [
    require("flowbite/plugin"),
  ],
};
