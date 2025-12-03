import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Use relative paths for GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  },
  server: {
    proxy: {
      "/api": {
        target: "https://66f3d67077b5.ngrok.app",
        changeOrigin: true,
        secure: false,
        open: true,
      },
    },
  },
})
