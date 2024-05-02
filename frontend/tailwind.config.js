/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      colors: {
        navColor: '#49556e',
      },
      backgroundImage: {
        'backgroundImage': "url('/header_img.png')",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          ' 100%': { opacity: '1' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 2.9s ',
      }
    },
  },
  plugins: [],
}

