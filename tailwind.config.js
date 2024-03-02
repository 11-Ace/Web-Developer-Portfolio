/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./docs/**/*.{html,js}'],
  theme: {
    screens: {
      xl: { max: '1440px' },
      lg: { max: '976px' },
      md: { max: '768px' },
      sm: { max: '480px' },
    },
    extend: {
      colors: {
        mainBg: 'hsl(240, 5%, 4%)',
        grayBg: 'hsl(228, 10%, 20%)',
        headingText: 'hsl(0, 0%, 100%)',
        primaryText: 'hsl(240, 0%, 65%)',
        contactLink: 'hsl(53, 96%, 65%)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        prata: ['Prata', 'sans-serif'],
      },
      fontSize: {
        h1: '2.5rem',
        h2: '1.875rem',
        h3: '1.5rem',
      },
    },
  },
  plugins: [],
};
