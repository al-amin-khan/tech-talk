/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'bluish-purple': '#6047EC',
    },
    fontFamily: {
      'sans': ['"Exo 2"', ], 
    }
  },
  plugins: [],
}

