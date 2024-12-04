/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/bg-hero.jpg')",
      },
      fontFamily: {
        sans: ['"Play", sans-serif'],
      },
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        md: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        lg: '4px 4px 8px rgba(0, 0, 0, 0.5)',
      },
      colors: {
        yellow: {
          300: "#F9D342",
          400: "#F8C12D",
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}

