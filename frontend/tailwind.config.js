// tailwind.config.js
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F59E0B',
        'secondary': 'oklch(96.9% 0.015 12.422)',
        'third': 'oklch(98.5% 0.001 106.423)',
      },
      fontFamily: {
        cookie: ['Cookie', 'cursive']
      }
    },
  },
  plugins: [],
}
