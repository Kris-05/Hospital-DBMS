/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        acme: ["Acme", "sans-serif"],
        chakra: ["Chakra Petch", "sans-serif"],
        roman: ["Gideon Roman", "sans-serif"],
        poetsen: ["Poetsen One", "sans-serif"],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}


