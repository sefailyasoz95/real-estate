module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 0.3s ease-in-out',
        'fade-out': 'fade-out 0.3s ease-in-out',
      },
      width: {
        '47%': '47%',
      },
      height: {
        '650px': '650px',
      },
      rotate: {
        360: '360deg',
      },
    },
  },
  plugins: [],
}
