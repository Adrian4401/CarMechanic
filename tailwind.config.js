/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    colors: {
      'background': '#181818',
      'primary': '#d9d9d9',
      'secondary': '#ff3131'
    },
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif']
      }
    }
  },
  plugins: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
}

