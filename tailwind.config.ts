import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: "var(--poppins-font)",
      passion: "var(--passion-font)",
      lobster: "var(--lobster-font)",
    },
    extend: {
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      colors: {
        primary: {
          DEFAULT: "#734B5E",
          200: "#F1EAEE",
          300: "#E1D1D9",
          400: "#D1B9C4",
          500: "#C1A0B0",
          600: "#B1879B",
          700: "#A16F87",
          800: "#8C5B72",
          900: "#734B5E",
          950: "#624050",
        },
        secondary: {
          DEFAULT: "#F5D3C8",
          800: "#FBEFEB",
          900: "#F5D3C8",
          950: "#F1C0B0",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
export default config;
