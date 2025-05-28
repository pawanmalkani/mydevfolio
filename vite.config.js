import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss(),

  ],
  base: '/mydevfolio/',
  safelist: ['slide-in-left', 'slide-in-right', 'bg-[radial-gradient(circle,_rgba(0,225,255,1)_0%,_rgba(175,222,222,1)_100%)]',]
})
