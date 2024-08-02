/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '1.9',
      }
      ,backgroundImage: {
        'bgimg': "url('background.jpg')",
      }
    },
  },
  plugins: [],

}


