/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purpleLight: "#FBF2FF",
        purpleMedium: "#DC86FA",
        purpleDeep: "#AA00D7",
        purpleRich: "#9600B3",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
