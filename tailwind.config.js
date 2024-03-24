/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#f1fde8",
          "100": "#dffacd",
          "200": "#c2f5a1",
          "300": "#9aeb6b",
          "400": "#78de40",
          "500": "#56c31f",
          "600": "#409c14",
          "700": "#327714",
          "800": "#2c5e16",
          "900": "#275017",
          "950": "#102c07",
          "1000": "#030b00",
        },
        secondary: {
          "50": "#f5f8f8",
          "100": "#dcebe7",
          "200": "#b9d6ce",
          "300": "#8fb9b1",
          "400": "#679a90",
          "500": "#4d7f76",
          "600": "#3c655f",
          "700": "#33524e",
          "800": "#2c4341",
          "900": "#283937",
          "950": "#13201f",
        },
      },
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        impact: ["Impact", ...defaultTheme.fontFamily.sans],
        figtree: ["figtree", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [forms],
};
