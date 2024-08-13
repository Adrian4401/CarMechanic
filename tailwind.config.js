/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,vue,ts}"
  ],
  theme: {
    colors: {
      'background': '#181818',
      'primary': '#d9d9d9',
      'secondary': '#ff3131',
      'divider': '#3c3c3c',
      'text': 'ebebeb'
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

