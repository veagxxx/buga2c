/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      width: {
        "13px": "13px",
      },
      height: {
        "13px": "13px",
      }
    },
  },
  plugins: [],
}

