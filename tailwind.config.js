const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.html',
    './src/**/*.md',
  ],

  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Черная тема
        'primary-dark': '#0D2438',
        'secondary-dark': '#102D44',
        'ternary-dark': '#1E3851',

        // Красные акценты
        'primary-red': '#330000',
        'secondary-red': '#660000',
        'ternary-red': '#990000',

        // Вы можете также задать светлые оттенки для контекста
        'primary-light': '#F7F8FC',
        'secondary-light': '#FFFFFF',
        'ternary-light': '#f6f7f8',
        'custom-red': '#E02424', // основной красный (логотип)
        'custom-red-dark': '#B91C1C', // тёмный для hover
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '5rem',
          xl: '6rem',
          '2xl': '8rem',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
