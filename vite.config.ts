import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/peace-pulse-co/',  // base path for GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'dist',          // ensure output goes to 'dist' folder
    emptyOutDir: true        // clears previous builds
  }
})
