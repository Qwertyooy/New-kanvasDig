import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  
  
  site: {
    url: 'https://kanvasdigital.com', 
    name: 'Kanvas Digital',
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  },
   
  build: {
    transpile: ['gsap']
  },

  modules: [
    '@nuxt/ui', 
    '@nuxt/icon', 
    '@nuxtjs/sitemap', 
    '@nuxtjs/robots'
  ],

  // 2. KONFIGURASI UNTUK ROBOTS
  robots: {
    
    allow: '/', 
    
    sitemap: '/sitemap.xml'
  },

  // 3. KONFIGURASI UNTUK SITEMAP (Opsional, bawaannya sudah otomatis mendeteksi semua halaman di folder pages/)
  sitemap: {
    xsl: false, // Mematikan styling XML jika kamu ingin file sitemap-nya super ringan
    exclude: [
      '/admin/**', // Contoh: jangan masukkan halaman admin ke dalam sitemap Google
    ],
  },

  experimental: {
    inlineSSRStyles: true 
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'id'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=1' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png?v=1' }
      ]
    }
  }
});