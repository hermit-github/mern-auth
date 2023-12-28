import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import config from './config'

console.log('config', config)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000,
    proxy:{
      '/api':{
        target:'localhost:8080',
        changeOrigin:true
      }
    }
  }
})
