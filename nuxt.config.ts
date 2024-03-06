import pkg from './package'

const env = {
  APP_NAME: 'Nellie Pease',
}

const colors = {
  primary: '#C68C36',
  hero: '#FFE4BC',
  portfolio: '#F3F2ED',
  footer: '#F3E9C6',
  nav: '#F3F2ED',
}

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    // ...env,
  },

  plausible: {
    domain: process.env.PLAUSIBLE_DOMAIN ?? 'gondwanarama.com',
    apiHost: process.env.PLAUSIBLE_API_HOST ?? 'https://plausible.daim.dev',
  },

  app: {
    head: {
      title: env.APP_NAME,
      titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} | ${env.APP_NAME}` : env.APP_NAME
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          property: 'og:title',
          content: env.APP_NAME,
          hid: 'og:title',
        },
        {
          hid: 'description',
          name: 'description',
          content: pkg.description,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: pkg.description,
        },
        { name: 'apple-mobile-web-app-status-bar', content: colors.portfolio },
        { name: 'theme-color', content: colors.portfolio },
        {
          property: 'og:image',
          content: '/cover.png',
        },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:width', content: '1440' },
        { property: 'og:image:height', content: '740' },
        { property: 'og:image:alt', content: env.APP_NAME },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  css: ['@unocss/reset/tailwind.css'],

  modules: [
    '@unocss/nuxt',
    '@nuxt/content',
    '@nuxtjs/plausible',
    '@vueuse/nuxt',

    // always declare the sitemap module at end of array
    // '@nuxtjs/sitemap',
  ],

  // sitemap: {
  //   hostname: env.BASE_URL,
  // },
})
