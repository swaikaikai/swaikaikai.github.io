import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // 個人主站 (swaikaikai.github.io) 這裡必須是 '/' 
  // 絕對不能寫成 '/portal/' 或 '/swaikaikai.github.io/'
  base: '/', 
})
