/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        primary: '#4731D3', 
        secondary: '#CBF281', 
        darkBg: '#252128', 
      }
    },
  },
  plugins: [],
};