/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#e19a5d',
        'primary-opacified': '#e19a5d5c',
        secondary: '#181a1b',
        variant: '#bdbdbd',
      },
    },
  },
  plugins: [],
};
