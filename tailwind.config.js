/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        luxuryGold: '#d4af37',
        luxuryDark: '#2b2b2b',
        luxuryGray: '#1c1c1c',
      },
    },
  },
  plugins: [
  ],
}