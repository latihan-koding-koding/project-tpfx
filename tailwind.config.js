// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
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
        sans: ['Nunito Sans', 'Inter', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'primary-black-1': '#272727',
        'primary-gray-4': '#222223',
        'primary-gray-5': '#535353',
        'primary-gold-1': '#CC8A00',
        'secondary-gray': '#757373',
        'secondary-gray-2': '#BDBDBD',
        'secondary-gray-3': '#C4C4C4',
        'secondary-gray-4': '#9E9E9E',
        'secondary-gray-5': '#EBEBEB',
        'secondary-gray-6': '#E5E5E5',
        'secondary-gray-7': '#F6F6F6',
        'secondary-gold-1': '#FFBF3F',
        'secondary-gold-5': '#FFFBF4'
      },
      border: {
        'border-1': '1px'
      },
      lineHeight: {
        h1: '61px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('daisyui')]
};
