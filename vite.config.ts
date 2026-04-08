
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 'base: "./"' asegura que los recursos carguen con rutas relativas.
  // Esto evita pantallas en blanco o errores 404 al subir a GitHub Pages.
  base: './', 
  server: {
    port: 5173,
    strictPort: false,
  }
})
