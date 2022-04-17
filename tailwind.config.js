const { transform } = require("typescript");

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    },
    screens: {
      sm: '567px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    minWidth: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },
    extend: {
      colors: {
        'background-color': '#F8F6F7',
        accent: '#F3BBC4',
        'accent-2': '#CDB7BD',
        yellow: '#F3D065',
        'primary-dark': '#323946',
        'primary-gray': '#949DAF',
        primary: '#01B553',
        success: '#A7DFDA',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
        lb: '-5px 5px 13px -3px rgba(0, 0, 0, 0.12)',
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
      },
      keyframes: {
        spread: {
          '0%': { transform: 'translate(-50%, -50%) scale(0)', opacity: '0'},
          '50%': {opacity: '0.3'},
          '100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '1'},
        },
        dnaChainBefore: {
          '0%': { top: '0', transform: 'translateY(0) scale(1)', opacity: '1' },
          '25%': { transform: 'translateY(-50%) scale(1.25)', opacity: '0.75', zIndex:'-1'},
          '50%': { top: '100%', transform: 'translateY(-100%) scale(1)', opacity: '0.5'},
          '75%': { transform: 'translateY(-100%) scale(0.5)', opacity: '0.75', zIndex:'1'},
          '100%': { top: '0', transform: 'translateY(0) scale(1)', opacity: '1'},
        },
        dnaChainAfter: {
          '0%': { bottom: '0', transform: 'translateY(0) scale(1)', opacity: '0.5' },
          '25%': { transform: 'translateY(-50%) scale(0.5)', opacity: '0.75', zIndex:'1'},
          '50%': { bottom: '100%', transform: 'translateY(-100%) scale(1)', opacity: '1'},
          '75%': { bottom: 'translateY(-100%) scale(1.25)', opacity: '0.75', zIndex:'-1'},
          '100%': { bottom: '0', transform: 'translateY(0) scale(1)', opacity: '0.5'},
        },
        rotateDNA: {
          '0%': { transform: 'rotate(0)'},
          '100%': { transform: 'rotate(360deg)'},
        }
      }
    },
  },
};
