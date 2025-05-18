// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Website Nuxt Ars (SSR)',
      meta: [
        { name: 'description', content: 'Buat keperluan cek sitelinks' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' } 
      ]
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/sitemap',
  ],
  sitemap: {
    siteUrl: 'https://try-nuxt3-for-ssr.vercel.app',
  }
  // ssr: false
})