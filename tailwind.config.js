/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          dark: '#4F4F4F',
          medium: '#ABABAB',
          light: '#E5E5E6',
        },
        pink: '#FFB1CB',
        purple: '#453D55'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'anton': ['Anton', 'sans-serif']
      },
    },
  },
  plugins: [],
}