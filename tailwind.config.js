/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
  plugins: [],
}

