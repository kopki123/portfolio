// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxtjs/seo',
    'nuxt-gtag',
  ],

  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: 'system',
    fallback: 'light',
  },

  gtag: {
    enabled: process.env.NODE_ENV === 'production',
    id: process.env.NUXT_PUBLIC_GTAG_ID,
  },

  site: {
    url: 'https://portfolio-amber-six-97.vercel.app',
    name: 'Portfolio',
  },

  ogImage: {
    componentOptions: {
      global: true,
    }
  },

  robots: {
    blockNonSeoBots: true,
    blockAiBots: true,
    groups: [
      {
        userAgent: '*',
        allow: '/',
        contentUsage: {
          'bots': 'y',
          'train-ai': 'n'
        },
        contentSignal: {
          'ai-train': 'no',
          'search': 'yes'
        }
      }
    ],
  },

  devServer: {
    host: '0.0.0.0',
    port: 3000,
  },

  eslint: {
    config: {
      // stylistic: true,
    },
  },
})