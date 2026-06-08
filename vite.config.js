import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',

      workbox: {
        navigateFallbackDenylist: [
          /^\/pdfs\//,
          /^\/.*\.(pdf|txt|png|jpg|jpeg|webp|svg)$/
        ]
      },

      manifest: {
        id: "/",
        name: "Passo Verde",
        short_name: "Passo Verde",
        description: "Guia de arborização urbana",
        start_url: "/",
        display: "standalone",
        background_color: "#f7f5ea",
        theme_color: "#f7f5ea",
        orientation: "portrait",

        icons: [
          {
            src: "icons/icon-192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "icons/icon-512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ]
})
