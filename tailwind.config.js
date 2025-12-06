/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0f172a', // Deep Navy (Slate 900)
        'secondary': '#334155', // Slate 700
        'accent': '#0d9488', // Teal 600
        'accent-light': '#2dd4bf', // Teal 400
        'accent-dark': '#115e59', // Teal 800
        'surface': '#f8fafc', // Slate 50
        'surface-hover': '#f1f5f9', // Slate 100
        'white': '#ffffff',
      },
      fontFamily: {
        'vazir': ['Vazirmatn', 'sans-serif'],
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
