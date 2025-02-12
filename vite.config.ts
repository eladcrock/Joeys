import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/joeys/', // This should match your GitHub repo name

  plugins: [react()],
  build: {
    // Add any specific build configuration options if necessary
  }
})
