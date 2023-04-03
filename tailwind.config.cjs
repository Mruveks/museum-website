/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,css}'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      backgroundImage: {
        'planYourVisit': "url('/src/assets/planYourVisit.jpg')",
        'accessibility': "url('/src/assets/accessibility1.jpg')",
      }
    },
  },
  plugins: [],
}
