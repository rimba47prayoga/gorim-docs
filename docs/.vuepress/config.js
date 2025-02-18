import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'

export default defineUserConfig({
  lang: 'en-US',

  title: 'Gorim',
  description: 'The web framework for perfectionists with deadlines.',
  head: [
    ['meta', { name: 'go-import', content: 'gorim.org/gorim git https://github.com/rimba47prayoga/gorim' }],
    ['meta', { name: 'http-equiv', content: '0; url=https://github.com/rimba47prayoga/gorim' }],
    ['meta', { name: 'robots', content: 'index, follow' }],  // ✅ Allow search engines to index
    ['meta', { name: 'description', content: 'Gorim - A Django-inspired Go framework' }],
    ['meta', { name: 'keywords', content: 'Gorim, Go framework, Django for Go, Go web framework' }],
    ['link', { rel: 'canonical', href: 'https://gorim.org/gorim' }]  // ✅ Helps Google recognize the main URL
  ],

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    navbar: ['/', '/get-started'],
    site: 'https://gorim.org',
  }),


  bundler: viteBundler(),
  plugins: [
    sitemapPlugin({
      hostname: 'https://gorim.org',
      changefreq: 'daily',
      excludeUrls: ['/404.html'],
    }),
  ],
})
