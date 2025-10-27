// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  hooks: {
    'build:before': async () => {
      if (process.env.NETLIFY) {
        console.log('🪶 Skipping Substack sync on Netlify build...')
        return
      }
      try {
        const { default: syncSubstack } = await import('./scripts/sync-substack.js')
        await syncSubstack()
        console.log('✅ RSS data generated successfully')
      } catch (error) {
        console.error('❌ Failed to generate RSS data:', error)
      }
    }
  },

  compatibilityDate: "2024-11-13",

  // Nuxt 4 experimental features for enhanced performance
  experimental: {
    // Enhanced client-side navigation
    viewTransition: true,
    // Better component islands
    componentIslands: true,
    // Improved build performance
    buildCache: true
  },
  // Enhanced build optimization
  optimization: {
    keyedComposables: [
      {
        name: 'useBlogData',
        argumentLength: 0
      },
      {
        name: 'useNewsletterData',
        argumentLength: 0
      }
    ]
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@nuxtjs/sitemap',
    '@nuxt/image'
  ],
  // Thank You, Debbie - https://debbie.codes/blog/nuxt-lite-youtube-embeds/
  plugins: [
      '~/plugins/youtube.client.js',
      '~/plugins/sentry.client.ts'
  ],
  build: {
    transpile: ['lite-youtube'],
  },
  vite: {
    vue: {
      script: {
        propsDestructure: true
      },
      template: {
        compilerOptions: {
          isCustomElement: tag => tag === 'lite-youtube'
        }
      }
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env['NUXT_PUBLIC_SITE_URL'] || 'http://localhost:3000',
      urlSchema: 'http',
      urlDomain: 'localhost:3000',
      urlBase: 'http://localhost:3000',
      sentry: {
        dsn: '',
        environment: 'development',
      },
      fathom: {
        siteId: ''
      }
    },
  },
routeRules: {
  '/': { prerender: true },
  '/blog/**': { isr: true },
  '/about': { prerender: true },
  '/projects': { prerender: true },
  '/rss.xml': { prerender: true }
},

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        // Resource hints for external domains
        { rel: 'dns-prefetch', href: 'https://cdn.usefathom.com' },
        { rel: 'dns-prefetch', href: 'https://browser.sentry-cdn.com' },
        { rel: 'preconnect', href: 'https://cdn.usefathom.com', crossorigin: 'anonymous' },
        // Critical font preloading (add your fonts here)
        // { rel: 'preload', href: '/fonts/your-font.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }
      ],
      meta: [
        // Performance and SEO optimizations
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#ffffff' },
        // Preload critical above-the-fold images
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        {
          src: "https://cdn.usefathom.com/script.js",
          "data-site": process.env['NUXT_PUBLIC_FATHOM_SITE_ID'],
          defer: true,
          async: true,
          tagPosition: 'bodyClose'
        }
      ],
    }
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },
  tailwindcss: {
    cssPath: '~assets/styles/tailwind.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    config: {},
    viewer: true
  },
  // Enhanced PostCSS configuration for performance
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano: process.env['NODE_ENV'] === 'production'
        ? {
            preset: ['default', {
              discardComments: { removeAll: true },
              normalizeWhitespace: true,
              removeUnusedKeyframes: true,
              mergeLonghand: false, // Disabled to preserve Tailwind's mobile-first media queries
              mergeRules: false, // Disabled to prevent CSS rule reordering
              discardDuplicates: true
            }]
          }
        : false, // disable cssnano when not in production
    },
  },
  content: {
      // Let Nuxt Content handle serverless automatically - zero configuration
      build: {
          markdown: {
              highlight: {
                  theme: {
                      default: 'github-light',
                      dark: 'github-dark',
                      sepia: 'github-light'
                  },
                  langs: ['java','json','js','ts','css','shell','html','md','yaml','sql','properties','http','groovy','graphql']
              }
          }
      }
  },
  image: {
    provider: process.env['NODE_ENV'] === 'production' ? 'netlify' : 'ipx',
    domains: ['pradyumna-chippigiri.netlify.app']
  },

  nitro: {
  preset: process.env.NITRO_PRESET || 'netlify',
  prerender: {
    failOnError: false
  },
  output: {
    publicDir: '.output/public'
  }
},


  sitemap: {
    xsl: false
  },
  css: ['./node_modules/lite-youtube-embed/src/lite-yt-embed.css'],
  devtools: { enabled: true }
})