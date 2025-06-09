// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        light: '#f9fafb',
        lightAccent: '#00f0ff',     
        dark: '#0f172a',
        darkAccent: '#00f0ff',
        light2: '#f1f5f9',
        dark2: '#0e1629',
      }
    },
  },
  plugins: [],
};
