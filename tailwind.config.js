/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#004B87',
          light: '#0066CC',
          dark: '#003366',
        },
        success: {
          DEFAULT: '#22C55E',
          light: '#4ADE80',
        },
        accent: {
          gold: '#D4AF37',
          'gold-light': '#F4D03F',
        },
      },
      fontFamily: {
        vazir: ['Vazir', 'sans-serif'],
        estedad: ['Estedad', 'Vazir', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 10px 25px rgba(0, 0, 0, 0.08), 0 4px 8px rgba(0, 0, 0, 0.06)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
      },
    },
  },
  plugins: [],
}
