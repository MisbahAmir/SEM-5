import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),  tailwindcss(),],
})


// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";

// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   server: {
//     port: 5173,
//     proxy: {
//       // Ye ensure karta hai ke "/api" requests backend pe forward ho jaye
//       "/api": {
//         target: "http://localhost:5000",
//         changeOrigin: true,
//         secure: false,
//         // Optional: pathRewrite agar backend me /api nahi chahiye
//         // rewrite: (path) => path.replace(/^\/api/, '')
//       },
//     },
//   },
// });
