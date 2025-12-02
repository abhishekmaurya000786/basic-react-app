import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// const tailwindCustomConfiguration = {
//       config: {
//         darkMode: 'class', // 👈 explicit declaration
//         content: [
//           './index.html',
//           './INDEX_Files/src/**/*.{js,jsx,ts,tsx}',
//         ],
//         theme: {
//           extend: {},
//         },
//         plugins: [],
//       },
//     };

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // tailwindcss(tailwindCustomConfiguration),
    tailwindcss(),
  ],



  // root: 'INDEX_Files/src/Props-Drilling/Ex1',
  // root: 'INDEX_Files/src/Props-Drilling/Ex2',
  // root: 'INDEX_Files/src/Props-Drilling/Ex3',
  // root: 'INDEX_Files/src/Props-Drilling/Ex3_Extended',
  // root: 'INDEX_Files/src/Rendering_JSON_Data/Ex1',
  // root: 'INDEX_Files/src/React_Router_DOM/Ex2',
  // root: 'INDEX_Files/src/React_Router_DOM/Ex3',
  // root: 'INDEX_Files/src/React_Router_DOM/Ex1',
  // root: 'INDEX_Files/src/Context_API/Ex1',
  // root: 'INDEX_Files/src/Context_API/Ex2',
  // root: 'INDEX_Files/src/Context_API/Ex3',
  // root: 'INDEX_Files/src/Context_API/Ex4',
  // root: 'INDEX_Files/src/Context_API/Ex5',
  //  root: 'INDEX_Files/src/Raw-JavaScript/Observer_Pattern/Ex1',
  //  root: 'INDEX_Files/src/Raw-JavaScript/Observer_Pattern/Ex2',
  // root: 'INDEX_Files/src/Raw-JavaScript/Debouncing/Ex1',
  // root: 'INDEX_Files/src/Raw-JavaScript/Throttling/Ex1',
  // root: 'INDEX_Files/src/Raw-JavaScript/IntersectionObserver/Ex1',
  // root: 'INDEX_Files/src/Raw-JavaScript/CodeSplitting/Ex1',
  // root: 'INDEX_Files/src/Raw-JavaScript/CodeSplitting/Ex2',
  // root: 'INDEX_Files/src/Raw-JavaScript/CodeSplitting/Ex3',
  // root: 'INDEX_Files/src/Raw-JavaScript/CodeSplitting/Ex4',
  // root: 'INDEX_Files/src/Raw-JavaScript/CodeSplitting/Ex5',

  // root: 'INDEX_Files/src/Redux/Ex1',
  // root: 'INDEX_Files/src/Redux/Ex2',
  // root: 'INDEX_Files/src/Redux/Ex3',
  // root: 'INDEX_Files/src/Redux/Ex4',
  // root: 'INDEX_Files/src/Redux/Ex5',
  root: 'INDEX_Files/src/Redux/Ex6',



})



