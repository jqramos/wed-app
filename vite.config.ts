import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
      proxy: {
          '/api': 'https://young-thunder-1990.fly.dev',
      },
  }
})
