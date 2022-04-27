module.exports = {
    content: [
      "./public/*.{html, htm}",
      "./src/*.{js,jsx,ts,tsx}",
      "./src/**/*.{js,jsx,ts,tsx}",
      "./src/**/**/*.{js,jsx,ts,tsx}",
      "./src/**/**/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      fontFamily: {
        'product': ['Plus Jakarta Sans', 'sans-serif']
      },
      extend: {},
    },
    plugins: [],
  }