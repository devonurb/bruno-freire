import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // caminhos relativos: funciona no GitHub Pages (/bruno-freire/), Vercel, Netlify ou domínio próprio
  base: './',
})
