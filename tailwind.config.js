module.exports = {
  content: ['*.html'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1110px',
      xl: '1440px',
    },
    colors: {
      'very-dark-blue': '#1B1D23',
      'dark-grey': '#60636D',
      'medium-grey': '#7D828F',
      'light-grey': '#C8CCD8',
      'very-light-grey': '#EEEFF4',
      errors: '#DF5656',
    },
    fontFamily: {
      sans: ['Spartan', 'sans-serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
