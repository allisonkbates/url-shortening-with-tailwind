module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'xs': '450px',
      // => @media (min-width: 375px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      'sans': ['Poppins', 'Helvetica', 'sans-serif'],
    },
    extend: {
      colors: {
        'light-gray': '#9E9AA7',
        'bright-teal': '#2ACFCF',
        'dark-purple': '#34313D',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '108': '28rem',
      },
    }
  },
  variants: {},
  plugins: [],
}
