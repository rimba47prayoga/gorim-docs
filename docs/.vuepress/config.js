import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'
import { seoPlugin } from '@vuepress/plugin-seo'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'

export default defineUserConfig({
  lang: 'en-US',

  title: 'Gorim',
  description: 'The web framework for perfectionists with deadlines.',
  head: [
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'go-import', content: 'gorim.org/gorim git https://github.com/rimba47prayoga/gorim' }],
    ['meta', { name: 'http-equiv', content: '0; url=https://github.com/rimba47prayoga/gorim' }]
  ],

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    navbar: ['/', '/get-started'],
    site: 'https://gorim.org',
    sidebar: [
      {
        text: 'Guide',
        children: [
          '/get-started',
          '/serializers',
          '/views',
          '/mixins',
          '/filter',
          '/pagination',
          '/routing',
          '/middleware',
          '/permissions',
          '/migrations',
          '/error-handling',
        ],
      },
    ],
  }),


  bundler: viteBundler(),
  plugins: [
    searchPlugin(),
    seoPlugin({
      hostname: 'https://gorim.org',
      changefreq: 'daily',
      excludeUrls: ['/404.html'],
    }),
    sitemapPlugin({
      hostname: 'https://gorim.org',
      changefreq: 'daily',
      excludeUrls: ['/404.html'],
    }),
  ],
})
