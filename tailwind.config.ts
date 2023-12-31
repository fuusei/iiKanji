import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      plum: "#332c50",
      dolphin: "#46878f",
      "granny-apple": "#94e344",
      offwhite: "#e2f3e4",
    },
    extend: {
      fontFamily: {
        gameboy: ["var(--font-gameboy)"],
        kanji: ["var(--font-kanji)"],
      },
    },
  },
  plugins: [nextui()],
};
export default config;
