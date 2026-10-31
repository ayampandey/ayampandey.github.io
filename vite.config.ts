import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Served from the root of https://ayampandey.github.io (user site), so base stays "/".
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
