import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    forceHttps: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      Styles: path.resolve(__dirname, './src/assets/Styles/'),
    },
  },
})
