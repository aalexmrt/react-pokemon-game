import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
})
