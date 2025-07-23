/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "custom-brown": "#A85C01",
        "custom-black": "#252525",
        "custom-gray": "#FAFAFA",
        "dark-80": "rgba(37, 37, 37, 0.8)",
      },
    },
  },
  plugins: [],
};
