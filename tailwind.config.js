/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-surface': 'var(--bg-surface)',
        'bg-surface-2': 'var(--bg-surface-2)',
        'bg-surface-3': 'var(--bg-surface-3)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
        'accent': 'var(--accent)',
        'accent-hover': 'var(--accent-hover)',
        'border-custom': 'var(--border)',
      },
      fontFamily: {
        display: ['BatmanForeverAlternate', 'Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
        body: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
        batman: ['BatmanForeverAlternate', 'Helvetica', 'Arial', 'sans-serif'],
        montserrat: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1200px',
        },
      },
    },
  },
  plugins: [],
  darkMode: ['class'],
};
