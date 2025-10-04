/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#faf8f3',
          100: '#f5f0e5',
          200: '#e8dcc4',
          300: '#d9c59e',
          400: '#c9ad78',
          500: '#aa7f38',
          600: '#8f6a2e',
          700: '#755527',
          800: '#5d4522',
          900: '#4a381c',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
