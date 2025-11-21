// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  base: './', // This is the key change - makes paths relative
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})