/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dusk-blue': '#3d5a80',
        'dusk-blue-dark': '#2d4560',
        'powder-blue': '#98c1d9',
        'light-cyan': '#e0fbfc',
        'burnt-peach': '#ee6c4d',
        'burnt-peach-dark': '#d85a3d',
        'jet-black': '#293241',
        'warm-gray': '#6B6B6B',
        'stone': '#d4e4e8',
      },
      fontFamily: {
        'vazir': ['Vazirmatn', 'sans-serif'],
        'estedad': ['Estedad', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'shimmer': 'shimmer 3s infinite',
      },
      keyframes: {
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}
