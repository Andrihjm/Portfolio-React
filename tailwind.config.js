/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Orbitron',
        secondary: 'Rajdhani',
        tertiary: 'Aldrich',
      },
      color: {
        primary: '',
        secondary: '',
      },
      backgroundImage: {
        react: "url('/assets/react.svg)",
        bgImg: "url('./assets/bgImg.jpg')",
      }
    },
  },
  plugins: [],
}