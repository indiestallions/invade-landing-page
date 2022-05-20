module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#100D1F',
        'primary-red': '#ED4B56',
        'primary-white': '#EDEFF5',
      },
    },
  },
  plugins: [],
}
