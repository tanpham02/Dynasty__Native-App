/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/screens/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "nunito-900": ["Nunito-Black"], // 900
        "nunito-800": ["Nunito-ExtraBold"], // 800
        "nunito-700": ["Nunito-Bold"], // 700
        "nunito-600": ["Nunito-SemiBold"], // 600
        "nunito-500": ["Nunito-Medium"], // 500
        "nunito-400": ["Nunito-Regular"], // 400
        "nunito-300": ["Nunito-Light"], // 300
        "nunito-200": ["Nunito-ExtraLight"], // 200
      },
      colors: {
        primary: "#006a31",
        secondary: "#d52415",
      },
    },
  },
  plugins: [],
};
