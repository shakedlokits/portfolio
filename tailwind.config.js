const plugin = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      columns: {
        '4xs': '11.5rem',
      },
      fontSize: {
        base: '1rem',
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
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      }
    },
    fontFamily: {
      display: ['var(--font-youngserif)', 'serif'],
      body: ['var(--font-junicode)', 'sans-serif'],
      header: ['var(--font-oswald)', 'serif'],
    },
  },
};
