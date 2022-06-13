import { defineNuxtConfig } from 'nuxt'
// import pkg from './package'

// const env = {
//   BASE_URL,
//   APP_NAME:
//     process.env.APP_NAME ||
//     `${pkg.name.charAt(0).toUpperCase()}${pkg.name.slice(1)}`,
// }

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    // ...env,
    plausible: {
      domain: process.env.PLAUSIBLE_DOMAIN ?? 'gondwanarama.com',
      apiHost: process.env.PLAUSIBLE_API_HOST ?? 'https://plausible.daim.dev',
    },
  },

  // head: {
  //   title: env.APP_NAME,
  //   // titleTemplate: `%s | ${env.APP_NAME}`,
  //   meta: [
  //     {
  //       once: true,
  //       name: 'charset',
  //       hid: 'charset',
  //       content: 'utf-8',
  //     },
  //     {
  //       once: true,
  //       hid: 'viewport',
  //       name: 'viewport',
  //       content: 'width=device-width, initial-scale=1',
  //     },
  //     {
  //       once: true,
  //       property: 'og:title',
  //       content: env.APP_NAME,
  //       template: `%s | ${env.APP_NAME}`,
  //       hid: 'og:title',
  //     },
  //     {
  //       hid: 'description',
  //       name: 'description',
  //       content: pkg.description,
  //     },
  //   ],
  //   link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  // },

  buildModules: ['@unocss/nuxt'],

  modules: [
    '@nuxt/content',
    // 'vue-plausible',

    // always declare the sitemap module at end of array
    // '@nuxtjs/sitemap',
  ],

  // sitemap: {
  //   hostname: env.BASE_URL,
  // },
  unocss: {
    uno: true,
    attributify: true,
    preflight: true,
    webFonts: {
      fonts: {
        brand: [
          { name: 'Playfair Display' },
          {
            name: 'serif',
            provider: 'none',
          },
        ],
      },
    },
    icons: {
      scale: 1.2,
    },
    theme: {
      colors: {
        primary: '#C68C36',
        hero: '#FFE4BC',
        portfolio: '#F3F2ED',
        footer: '#F3E9C6',
        nav: '#F3F2ED',
      },
    },
    shortcuts: [
      {
        btn: 'py-2 px-4 text-xs rounded-lg px-6 py-2.5',
        'btn-link': 'bg-transparent',
      },
      // dynamic shortcuts
      [
        /^btn-(.*)$/,
        ([, c], { theme }) => {
          const isColor = theme.colors[c]
          const sm = 'px-4 py-1.5'
          const md = 'px-6 py-2.5'
          const lg = 'px-8 py-3 text-md'
          const sizes = { sm, md, lg }
          const size = sizes[c]
          if (size) {
            return size
          }
          const bg = isColor
            ? `bg-${c}-400 hover:bg-${c}-700 focus:bg-${c}-700 active:bg-${c}-800`
            : ''
          const text = isColor ? `text-${c}-100` : ''
          return `${bg} ${text} inline-block font-medium leading-tight shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out`
        },
      ],
    ],
  },
})
