module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#876A4B',
          light: '#A18E76',
          dark: '#5F4B35',
        },
        secondary: {
          DEFAULT: '#213555',
          light: '#4E638F',
          dark: '#0F1A2A',
        },
        accent: {
          DEFAULT: '#E0C8A0',
          light: '#F0E3CC',
          dark: '#BFA67E',
        },
        neutral: {
          50: '#F8F8F8',
          100: '#F0F0F0',
          200: '#E4E4E4',
          300: '#D1D1D1',
          400: '#B4B4B4',
          500: '#919191',
          600: '#818181',
          700: '#6A6A6A',
          800: '#5A5A5A',
          900: '#3F3F3F',
        }
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
