/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-primary': "url('/statics/images/background.png')",
      },
    },
    fontFamily: {
<<<<<<< HEAD
      vnpro: ['Be Vietnam Pro', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
=======
      'montserrat': ['Montserrat', 'sans-serif']
    }
>>>>>>> cb4b2eba8a345de59a1a65d8496ea81161f666cd
  },
  plugins: [],
};
