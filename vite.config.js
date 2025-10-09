import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // root: 'INDEX_Files/src/Props-Drilling/Ex1',
  // root: 'INDEX_Files/src/Props-Drilling/Ex2',
  root: 'INDEX_Files/src/Props-Drilling/Ex3',
})
