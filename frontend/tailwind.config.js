

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'supercar': "url('./public/images/supercars.png')",
        'bus': "url('./public/images/busesss.jpg')",
        'el': "url('./public/images/electicc.jpg')",
        'ell': "url('./public/images/electiccc.jpg')",
        'suv': "url('./public/images/suvvv.jpg')",
        'truck': "url('./public/images/trucksss.jpg')",
        'theme': "url('./public/images/theme.jpg')",
        'orange-gradient': 'linear-gradient(to bottom, #F57F17, #F8B400)',
      },
      animation: {
        rotate: 'rotate 3s linear infinite',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
