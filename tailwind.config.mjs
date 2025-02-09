/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-meduim': '#131315',
        'gray-custom': '#929290',
        'dark-gray-custom': '#595959',
        'light-gray-custom': '#9FA7B2',
        'very-light-gray-custom': '#F5F5F5',
        'black-custom': '#222222',
        'color-secondary': '#d87297',
        'color-primary': '#002B55',
        'color-accent': '#fbcb50',
        'color-dark-slate': '#25261E',
        'color-blue': '#0072FA',
        'color-primary-linear':
          'linear-gradient(90deg, #002B55 0%,#0072FA 50%, #fbcb50 100%)',
      },
      borderRadius: {
        50: '50px',
        37: '37px',
        27: '27px',
        25: '25px',
        15: '15px',
      },

      backgroundImage: {
        'color-primary-linear':
          'linear-gradient(180deg, rgba(0, 43, 85, 0.8) 0%, rgba(0, 114, 250, 0.8) 43%, rgba(255, 255, 255, 0.8) 100%)',
        // 'linear-gradient(180deg, #002B55  0%,#0072FA 43%, #ffff 100%)',
      },
      fontSize: {
        'display-1': ['4rem', { lineHeight: '1.2' }], // 40px
        'display-2': ['3.5rem', { lineHeight: '1.2' }], // 35px
        h1: ['3.6rem', { lineHeight: '1.2' }], // 36px
        h2: ['3.5rem', { lineHeight: '1.2' }], // 35px
        h3: ['3.3rem', { lineHeight: '1.2' }], // 33px
        h4: ['3rem', { lineHeight: '1.2' }], // 32px
        h5: ['2.1rem', { lineHeight: '1.2' }], // 21px
        h6: ['1.25rem', { lineHeight: '1.2' }], // 1.25px
        'p-xl': ['2.2rem', { lineHeight: '30px' }],
        'p-lg': ['2.1rem', { lineHeight: '28px' }],
        'p-md': ['2rem', { lineHeight: '30px' }],
        'p-sm': ['1.8rem', { lineHeight: '30px' }],
        'p-base': ['1.6rem', { lineHeight: '30px' }],
        'p-xs': ['1.2rem', { lineHeight: '28px' }],
        'p-2xs': ['1.1rem', { lineHeight: '16px' }],
      },
    },
  },
  plugins: [],
};

export default config;
