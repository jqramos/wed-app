/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#fdf3d6',
        'secondary': '#9a916f',
        'tertiary': '#75997f',
        'neutral': '#949088',
      }
    },
  },
  plugins: [],
}

