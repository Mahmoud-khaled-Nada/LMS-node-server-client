import defaultTheme from 'tailwindcss/defaultTheme';
import windmill from '@windmill/react-ui/config';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
      colors: {
        primary: defaultTheme.colors.purple,
      },
    },
  },
  plugins: [windmill],
}