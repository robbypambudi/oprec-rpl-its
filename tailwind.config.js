const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
      colors: {
        primary: {
          100: '#D5FEF1',
          200: '#B9FDE8',
          300: '#96FBDD',
          400: '#73FAD2',
          500: '#50F9C6',
          600: '#2DF8BB',
          700: '#1EA57D',
          800: '#177C5E',
        },
        secondary: {
          100: '#D3D8DE',
          200: '#B6BDC8',
          300: '#919CAC',
          400: '#6D7C91',
          500: '#495B76',
          600: '#243A5A',
          650: '#213A5C',
          700: '#1E304B',
          800: '#18273C',
        },
      },
      boxShadow: {
        card: '0px 4px 16px rgba(45, 248, 187, 0.4)',
        icon: 'rgba(201, 255, 239, 0.6), 0px 5.3982px 5.3982px rgba(154, 154, 154, 0.1)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
