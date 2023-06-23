module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '400px',
      sm: '500px',
      md: '728px',
      lg: '984px',
      xl: '1240px',
      '2xl': '1496px',
    },
    container: {
      screens: {
        xxs: '340px',
        xs: '380px',
        sm: '582px',
        md: '728px',
        lg: '728px',
        xl: '1096px',
        '2xl': '1452px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
