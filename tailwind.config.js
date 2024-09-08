/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./src/**/*.{html,js}",
    "./student/**/*.{html,js}",
    "./admin/**/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}