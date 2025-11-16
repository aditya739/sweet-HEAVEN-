/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          cream: '#FFF8F3',
          pink: '#FFD6E8',
          mint: '#D4F1E4',
          beige: '#F5E6D3',
          lavender: '#E8D5F2',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
