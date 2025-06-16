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
        'secondary': '#FFE4E6',
        'third': '#78350F',
      },
      fontFamily: {
        cookie: ['Cookie', 'cursive']
      }
    },
  },
  plugins: [],
}
