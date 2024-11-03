/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          navy: '#1A2744',
          gold: '#C6A87D',
          cream: '#F5F0E9',
          charcoal: '#2C3542',
          sand: '#E5DCD3',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}

