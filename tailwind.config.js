/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js",],
  theme: {
    extend: {
      width: {
        "2/7": "28%",
        "3/7": "56%",
        "2/8": "70%",
        "5/7": "95%",
        "1/7": "27%",
        "4/7": "86%",
      },
      height: {
        "3/7": "57%",
        "4/6": "74%",
        "5/7": "91%",
      },
    },
  },
  plugins: [],
}

