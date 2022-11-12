/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '350px',
      // => @media (min-width: 300px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '1024px',
      // => @media (min-width: 1024px) { ... }

    },
    extend: {},
  },
  plugins: [],
}