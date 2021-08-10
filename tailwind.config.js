const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'gradient-x': 'gradient-x 10s ease infinite',
        'gradient-y': 'gradient-y 10s ease infinite',
        'gradient-xy': 'gradient-xy 10s ease infinite'
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },
      width: {
        '1/9': '11.11111111%',
        '2/9': '22.22222222%',
        '3/9': '33.33333333%',
        '4/9': '44.44444444%',
        '5/9': '55.55555556',
        '6/9': '66.66666667%',
        '7/9': '77.77777778%',
        '8/9': '88.88888889%',
        55: '55%'
      },
      colors: {
        gray: {
          100: '#FBFBFB',
          200: '#f4f4f6',
          300: '#b8bcbf',
          400: '#999999',
          500: '#7F7F7F',
          600: '#666666',
          700: '#4C4C4C',
          800: '#333333',
          900: '#191919'
        },
        fuchsia: colors.fuchsia,
        violet: colors.violet,
        orange: colors.orange,
        teal: colors.teal,
        rose: colors.rose,
        lightBlue: colors.lightBlue,
        sky: colors.sky,
        'blue-link': '#3B719F'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
};
