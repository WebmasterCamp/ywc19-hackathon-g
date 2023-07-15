/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["'Kanit'", 'sans-serif'],
      serif: ["'Kanit'", 'serif'],
      mont: ["'Montserrat'", 'sans-serif'],
    },
    colors: {
      primary: 'rgba(5, 96, 253, 1)',
      lightBlue: 'rgba(234, 243, 252, 1)',
      transparent: 'transparent',
      white: '#ffffff',
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      'bubble-gum': '#ff77e9',
      bermuda: '#78dcca',
      gray: {
        100: 'rgba(229, 234, 239, 1)',
        200: '#888888',
      },
    },
    borderRadius: {
      xs: '8px',
      sm: '12px',
      md: '14px',
      full: '100%',
    },
  },
  plugins: [],
}
