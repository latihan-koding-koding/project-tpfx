// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor(theme) {
      return {
        ...theme('colors'),
        primary: '#FCAD10'
      };
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'primary-gray-4': '#222223',
        'primary-gold-1': '#CC8A00',
        'secondary-gray': '#757373'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('daisyui')]
};
