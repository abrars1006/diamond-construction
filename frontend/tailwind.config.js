import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DAA520", // Gold theme
        'primary-hover': "#B8860B", // Darker gold for hovers
        dark: "#0a0a0a", // Deep black
        'dark-card': "#141414", // Slightly lighter black for cards
        light: "#F5F5F5", // Off-white
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/hero-bg.jpg')",
      }
    },
  },
  plugins: [],
} satisfies Config
