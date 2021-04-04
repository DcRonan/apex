module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        lightgreen: '#97e493',
        lightblue: '#42b5e8',
        lightgrey: '#5b8092',
      },
      fontFamily: {
        nimbuslight: ['Nimbus Light', 'cursive'],
        nimbusbold: ['Nimbus Bold', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
