/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a7431',
        },
        secondary: {
          DEFAULT: '#f5f5f5',
        },
        accent: {
          DEFAULT: '#c39a56',
        },
      },
    },
  },
  plugins: [],
};