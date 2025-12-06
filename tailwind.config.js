/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#2C5F2D',
        'deep-forest': '#1a3a1b',
        'sage-green': '#7A9B7C',
        'gold': '#C9A961',
        'gold-dark': '#B8954F',
        'champagne': '#F4E8D0',
        'ivory': '#FEFCF8',
        'cream': '#F8F6F2',
        'stone': '#E8E6E1',
        'charcoal': '#2D2D2D',
        'warm-gray': '#6B6B6B',
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
