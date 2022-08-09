/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      columns: {
        '4xs': '11.5rem',
      },
      fontSize: {
        base: '0.75rem',
        xs: '0.5rem',
        '5xl': '2.9rem',
        '6xl': '3.875rem',
      },
      lineHeight: {
        tight: '1.2',
      },
      maxWidth: {
        xs: '18.75rem',
        '3xl': '56rem',
      },
    },
    fontFamily: {
      display: ['YoungSerif', 'serif'],
      body: ['Junicode', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
