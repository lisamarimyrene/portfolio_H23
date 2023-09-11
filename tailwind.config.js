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
          light: '#EAE4F0',
        },
        pink: '#FFB1CB',
        purple: '#453D55',
        purple_light: '#594F6B',
        purple_lighter: '#A09BAA',
        orange: '#FF8B71',
        yellow: '#F8D8A8',
        nude: '#E9C8D3'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'anton': ['Anton', 'sans-serif'],
        'krona': ['Krona One', 'sans-serif'],
        'notable': ['Notable', 'sans-serif'],
        'bungee': ['Bungee Shade', 'cursive'],
        'racing': ['Racing Sans One', 'cursive'],
        'bebas': ['Bebas Neue', 'sans-serif'],
        'seymour': ['Seymour One', 'sans-serif']
      },
    },
  },
  plugins: [],
}