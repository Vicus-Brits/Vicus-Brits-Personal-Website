import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://vicusbrits.com',
  vite: {
    plugins: [tailwindcss()],
  },
})
