import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { vitePWAOptions } from './manifest.config.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    //VitePWA(vitePWAOptions)
  ],
  build: {
    outDir: '../wwwroot/',
    emptyOutDir: true
  }
})
