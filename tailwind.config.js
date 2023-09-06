/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '500px',
      'md': '768px'
    },
    extend: {
      colors: {
        gray: {
          dark: '#4F4F4F',
          medium_dark: '#686768',
          medium: '#ABABAB',
          medium_light: '#C8C8C9',
          light: '#E5E5E6',
        },
        pink: '#FFB1CB',
        purple: '#453D55'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'anton': ['Anton', 'sans-serif'],
        'krona': ['Krona One', 'sans-serif']
      },
    },
  },
  plugins: [],
}