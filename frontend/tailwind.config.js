// tailwind.config.js
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#000000',
        'secondary': 'oklch(96.9% 0.015 12.422)',
        'third': 'oklch(98.5% 0.001 106.423)',
        'test': '#D1E751',
      },
      fontFamily: {
        cookie: ['Cookie', 'cursive']
      }
    },
  },
  plugins: [],
}
