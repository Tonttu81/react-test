/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#212121'
      },
      gridTemplateColumns: {
        '20/80': '[first] 20% [line2] auto',
      },
      gridTemplateRows: {
        '20/80': '[first] 20% [line2] auto',
      }
    },
  },
  plugins: [],
}
