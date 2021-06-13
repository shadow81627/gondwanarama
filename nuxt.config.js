import pkg from './package'

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || '3000'
const BASE_URL = (
  process.env.BASE_URL ||
  process.env.DEPLOY_URL ||
  process.env.URL ||
  process.env.VERCEL_URL ||
  `http${PORT === 433 ? 's' : ''}://${HOST}${
    [433, 80].includes(PORT) ? '' : `:${PORT}`
  }`
).replace(/(^http[s]?)?(?::\/\/)?(.*)/, function (_, protocol, domain) {
  return `${protocol || 'http'}://${domain}`
})

const env = {
  HOST,
  PORT,
  BASE_URL,
  DATE_GENERATED: new Date().toISOString(),
  APP_NAME:
    process.env.APP_NAME ||
    `${pkg.name.charAt(0).toUpperCase()}${pkg.name.slice(1)}`,
}

const preconnectLinks = []

export default {
  target: 'static',

  publicRuntimeConfig: {
    ...env,
  },

  generate: {
    fallback: true,
  },

  head: {
    title: env.APP_NAME,
    titleTemplate: `%s | ${env.APP_NAME}`,
    meta: [
      {
        once: true,
        name: 'charset',
        hid: 'charset',
        content: 'utf-8',
      },
      {
        once: true,
        hid: 'viewport',
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        once: true,
        property: 'og:title',
        content: env.APP_NAME,
        template: `%s | ${env.APP_NAME}`,
        hid: 'og:title',
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ...preconnectLinks.map((href) => ({
        rel: 'preconnect',
        href,
        hid: `preconnect-${href}`,
        crossorigin: 'anonymous',
        once: true,
      })),
    ],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    '@nuxt/image',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/gtm',
    'nuxt-fontawesome',
    'nuxt-i18n',

    // always declare the sitemap module at end of array
    '@nuxtjs/sitemap',
  ],

  axios: {},

  gtm: {
    id: 'G-GTJ1JMYZKK',
    pageTracking: true,
    scriptDefer: true,
  },

  pwa: {
    meta: {
      ogHost: env.BASE_URL,
      theme_color: '#2F466C',
      ogImage: {
        path: '/cover.jpg',
        width: 1200,
        height: 600,
        type: 'image/jpg',
      },
    },
  },

  sitemap: {
    hostname: env.BASE_URL,
  },

  image: {
    provider: 'static',
    staticFilename: '[publicPath]/img/[name][ext]?v=[hash]',
    screens: {
      placeholder: 10,
      xs: 320,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
    domains: [env.HOST],
    presets: {
      hero: {
        sizes: 'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw',
        modifiers: {
          quality: '70',
          format: 'webp',
        },
      },
      og: {
        sizes: 'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw',
        modifiers: {
          quality: '70',
          format: 'jpg',
          width: 1280,
        },
      },
      placeholder: {
        modifiers: {
          format: 'jpg',
          width: 10,
        },
      },
    },
  },

  i18n: {
    baseUrl: env.BASE_URL,
    seo: false,
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    },
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en',
        file: 'en.js',
      },
    ],
    lazy: true,
    langDir: 'lang/',
  },

  content: {},

  vuetify: {
    optionsPath: './vuetify.options.js',
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: false,
  },

  build: {
    transpile: ['lodash-es', 'vuetify/lib'],
    extractCSS: true,
    filenames: {
      app: ({ isDev, isModern }) =>
        isDev
          ? `[name]${isModern ? '.modern' : ''}.js`
          : `[name].${isModern ? '.modern' : ''}.js?v=[contenthash:7]`,
      chunk: ({ isDev, isModern }) =>
        isDev
          ? `[name]${isModern ? '.modern' : ''}.js`
          : `[name]${isModern ? '.modern' : ''}.js?v=[contenthash:7]`,
      css: ({ isDev }) =>
        isDev ? '[name].css' : 'css/[name].css?v=[contenthash:7]',
      img: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'img/[name].[ext]?v=[contenthash:7]',
      font: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'fonts/[name].[ext]?v=[contenthash:7]',
      video: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'videos/[name].[ext]?v=[contenthash:7]',
    },
    extend(config) {
      config.devtool = 'source-map'
    },
  },
}
