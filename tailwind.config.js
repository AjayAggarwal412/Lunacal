/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#363C43",
        customDark: "#171717",
        tabColor: "#171717",
        pColor: "#969696",
      },
    },
  },
  plugins: [],
};
