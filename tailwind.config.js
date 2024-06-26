/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/screens/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito-900': ['Nunito-Black'], // 900
        'nunito-800': ['Nunito-ExtraBold'], // 800
        'nunito-700': ['Nunito-Bold'], // 700
        'nunito-600': ['Nunito-SemiBold'], // 600
        'nunito-500': ['Nunito-Medium'], // 500
        'nunito-400': ['Nunito-Regular'], // 400
        'nunito-300': ['Nunito-Light'], // 300
        'nunito-200': ['Nunito-ExtraLight'], // 200
      },
      colors: {
        primary: '#006a31',
        secondary: '#e8002a',
        third: '#f5faff',
        fourth: '#1077e6',
        'gray-1': '#8c8c8c',
        'gray-2': '#eeeeee',
        'gray-3': '#c3c3c3',
        'gray-4': '#f7faff',
        'gray-5': '#f5faff',
        'gray-6': '#eef1f6',
        'gray-7': '#f7faff',
        'gray-8': '#f8fbff',
        'gray-9': '#666666',
        'gray-10': '#111111',
        'gray-11': '#444444',
        'gray-12': '#e1e1e1',
        'gray-13': '#fafafa',
        'gray-14': '#999999',
        danger: '#ff0505',
        success: '#00b041',
        warning: '#f0ad4e',
        info: '#5bc0de',
      },
      zIndex: {
        999999: '999999',
        99999: '99999',
        9999: '9999',
        999: '999',
        99: '99',
        9: '9',
        1: '1',
      },
    },
  },
  plugins: [],
};
