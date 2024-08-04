import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: 'hostApp',
      remotes: {
        remoteApp: 'remoteApp@http://localhost:3001/remoteEntry.js',
      },
      shared:{
        react:{
          eager:true,
          singleton:true,
          requiredVersion:"^18.3.1"
        },
        'react-dom':{
         eager:true,
         singleton:true,
         requiredVersion:"^18.3.1"
       }
      }
      
    }),],
  server:{
    port:8080,
    cors: {
      origin: '*',
      methods: ['GET', 'POST', 'OPTIONS'],
      allowedHeaders: ['Origin, Content-Type, Accept, Authorization'],
    },
  }
})
