import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 如果你用的是 v4 

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 確保 tailwind v4 外掛有在這裡
  ],
  base: '/', // 👈 個人主頁這裡必須是 '/'，絕對不能寫 repo 名字
})
