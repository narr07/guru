// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-llms',
    '@nuxtjs/mcp-toolkit',
    'nuxt-studio'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 3
        }
      }
    },
    experimental: {
      sqliteConnector: 'native'
    }
  },

  experimental: {
    asyncContext: true
  },

  compatibilityDate: '2026-06-30',

  // routeRules: {
  //   '/pendahuluan/**': { swr: true },
  //   '/mulai-di-sini/**': { swr: true },
  //   '/administrasi/**': { swr: true },
  //   '/kurikulum-merdeka/**': { swr: true },
  //   '/materi-bahan-ajar/**': { swr: true },
  //   '/strategi-metode/**': { swr: true },
  //   '/teknologi-digital/**': { swr: true },
  //   '/pengembangan-profesional/**': { swr: true },
  //   '/kesejahteraan-soft-skills/**': { swr: true },
  //   '/sumber-daya-referensi/**': { swr: true }
  // },

  nitro: {
    preset: 'cloudflare_pages',
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  llms: {
    domain: 'https://guru.permadi.dev/',
    title: 'Portal Dokumentasi Guru SD',
    description: 'Pusat dokumentasi praktis administrasi, kurikulum, dan strategi mengajar guru SD.',
    full: {
      title: 'Portal Dokumentasi Guru SD - Dokumentasi Lengkap',
      description: 'Seluruh dokumentasi praktis administrasi dan strategi mengajar untuk guru SD.'
    },
    sections: [
      {
        title: 'Pendahuluan',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/pendahuluan%' }
        ]
      },
      {
        title: 'Mulai di Sini',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/mulai-di-sini%' }
        ]
      },
      {
        title: 'Administrasi Guru SD',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/administrasi%' }
        ]
      },
      {
        title: 'Kurikulum Merdeka untuk SD',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/kurikulum-merdeka%' }
        ]
      },
      {
        title: 'Materi & Bahan Ajar',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/materi-bahan-ajar%' }
        ]
      },
      {
        title: 'Strategi & Metode Pembelajaran',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/strategi-metode%' }
        ]
      },
      {
        title: 'Teknologi & Digitalisasi',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/teknologi-digital%' }
        ]
      },
      {
        title: 'Pengembangan Profesional',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/pengembangan-profesional%' }
        ]
      },
      {
        title: 'Kesejahteraan & Soft Skills Guru',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/kesejahteraan-soft-skills%' }
        ]
      },
      {
        title: 'Sumber Daya & Referensi',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/sumber-daya-referensi%' }
        ]
      }
    ]
  },

  mcp: {
    name: 'Portal Dokumentasi Guru SD'
  },

  ogImage: {
    zeroRuntime: true
  },

  studio: {
    repository: {
      provider: 'github',
      owner: 'narr07',
      repo: 'guru',
      branch: 'master'
    }
  }
})