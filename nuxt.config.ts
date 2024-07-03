// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n"],
  compatibilityDate: "2024-07-03",
  i18n: {
    strategy: "prefix",
    defaultLocale: "en",
    locales: ["en", "it"],
  },
  experimental: {
    defaults: {
      nuxtLink: {
        activeClass: undefined,
        exactActiveClass: undefined,
        prefetchedClass: undefined, // can be any valid string class name
        trailingSlash: undefined, // can be 'append' or 'remove'
      },
    },
    componentIslands: {
      selectiveClient: "deep",
    },
  },
});
