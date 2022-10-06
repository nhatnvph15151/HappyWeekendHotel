/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'translate-y-6' },
          '100%': { transform: 'translate-y-0' },
        },
        grow: {
          '100%':{transform: 'scale-100'},
          '50%':{transform: 'scale-125'},
          '0%':{transform: 'scale-150'},
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out',
        grow: 'grow 1s ease'
      }
    },
  },
  plugins: [],
}