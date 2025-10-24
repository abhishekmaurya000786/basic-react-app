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
  // root: 'INDEX_Files/src/Props-Drilling/Ex3',
  // root: 'INDEX_Files/src/Props-Drilling/Ex3_Extended',
  // root: 'INDEX_Files/src/Rendering_JSON_Data/Ex1',
  // root: 'INDEX_Files/src/React_Router_DOM/Ex1',
  // root: 'INDEX_Files/src/Context_API/Ex1',
  // root: 'INDEX_Files/src/Context_API/Ex2',
  root: 'INDEX_Files/src/Context_API/Ex3',
})
