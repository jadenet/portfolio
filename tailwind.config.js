/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text_primary: 'hsl(0, 0%, 100%)',
        text_secondary: 'hsl(0, 0%, 0%)',
        background_primary: 'hsl(200, 12%, 15%)',
        background_secondary: 'hsl(0, 0%, 100%)',
        background_teritary: 'hsl(225, 51%, 87%)',
        background_darker: 'hsl(204, 17%, 12%)',
        button_primary: 'hsl(202, 61%, 59%)',
        button_secondary: 'hsl(0, 0%, 100%)',
        button_primary_hover: 'hsl(236, 61%, 59%)',
      },

      fontFamily: {
        roboto_slab: ['Roboto Slab', 'serif', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
