/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      brightness: {},
      colors: {
        customGray: '#F7F8FA',
        customGray2: '#F9FAFC'
      },
    },
  },
  plugins: [],
};
