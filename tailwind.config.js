/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      ameyallinda: ['Ameyallinda Signatur', 'sans-serif'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
