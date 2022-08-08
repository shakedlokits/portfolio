/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': '0.5rem'
      },
      lineHeight: {
        'tight': '1.2',
      },
      maxWidth: {
        'xs': '18.75rem',
      }
    },
    fontFamily: {
      display: ['YoungSerif', 'serif'],
      body: ['Junicode', 'sans-serif'],
    },
  },
  plugins: [],
}
