/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'], // we can configure the purge settings here.
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: ['bg-blue-400', 'bg-green-400', 'bg-red-400']
}

