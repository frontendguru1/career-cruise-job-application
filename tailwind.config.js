/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-custom': "linear-gradient(180deg, rgba(102, 45, 140, 0) 7%, #662D8C 100%)",
      },
      colors: {
        purpleGradient: '#662D8C',
        pinkBackground: '#ED1E79',
        bodyBg: '#F5F5F5',
        linkColor: '#FFA337',
        orangeColor: '#FF7E14',
        orangeColorLight: '#F1A448',

      },
    },
    fontFamily: {
      sans: ['Mulish', 'Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}
