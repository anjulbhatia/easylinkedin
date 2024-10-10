/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontSmoothing: ['hover', 'focus'],
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: ["light", "dark", "corporate", "business", "retro", "pastel", "cyberpunk", "black", "nord","valentine","wireframe"],
  }
}

