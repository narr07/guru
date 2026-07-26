export default defineAppConfig({
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'neutral'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'Portal Dokumentasi Guru SD'
  },
  header: {
    title: '',
    to: '/',
    logo: {
      alt: 'Portal Dokumentasi Guru SD',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/narr07/guru',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  },
  footer: {
    credits: `Portal Dokumentasi Guru SD • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/narr07/guru',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  },
  toc: {
    title: 'Daftar Isi',
    bottom: {
      title: 'Aksi Cepat',
      edit: 'https://github.com/narr07/guru/edit/master/content',
      links: [{
        icon: 'i-lucide-star',
        label: 'Beri Bintang di GitHub',
        to: 'https://github.com/narr07/guru',
        target: '_blank'
      }, {
        icon: 'i-lucide-download',
        label: 'Template Siap Pakai',
        to: '/administrasi/kumpulan-template-siap-pakai'
      }]
    }
  }
})
