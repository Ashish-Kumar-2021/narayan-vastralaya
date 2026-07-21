/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Safelist ensures custom branded utilities are always generated
  safelist: [
    // specific utilities
    'bg-brand-maroon', 'bg-brand-gold', 'bg-brand-beige', 'bg-brand-black', 'bg-brand-dark', 'bg-brand-darkGray',
    'text-brand-maroon', 'text-brand-gold', 'text-brand-beige', 'text-brand-black',
    'border-brand-maroon', 'border-brand-gold', 'border-brand-beige',
    'animate-fade-in', 'animate-slide-up',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          maroon: '#6A1B29',
          gold: '#D4AF37',
          beige: '#F9F6F0',
          black: '#1A1A1A',
          white: '#FFFFFF',
          dark: '#121212',
          darkGray: '#1E1E1E'
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
