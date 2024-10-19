
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          400: '#9F7AEA',
          500: '#805AD5',
        },
        gray: {
          700: '#4A5568',
          800: '#2D3748',
          900: '#1A202C',
        },
      },
    },
  },
  plugins: [],
}