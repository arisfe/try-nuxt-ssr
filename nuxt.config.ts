// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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