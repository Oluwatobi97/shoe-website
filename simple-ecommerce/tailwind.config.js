/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A0A0A", // main black
        secondary: "#1A1A1A", // soft black
        borderSoft: "#E5E5E5", // borders
        softWhite: "#FAFAFA", // background
        pureWhite: "#FFFFFF",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
