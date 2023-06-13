/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("prettier-plugin-tailwindcss")],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        "primary-dark": "#4f46e5",
        secondary: "#2c272f",
        // "gray-light": "#f3f4f6",
      },
    },
  },
  plugins: [],
};
