module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "libre": ["Libre Baskerville"],
        "open-sans": ["Open Sans"]
      },
      colors: {
        "black-semi": "#1C1C1C",
        "gray-primary": "rgba(28, 28, 28, 0.5)",
      }
    },
    container: {
      screens: {
        "sm": '640px',
        "md": '768px',
        "lg": '1024px',
        "xl": '1280px',
        "2xl": '1316px',
      }
    }
  },
  plugins: [],
}
