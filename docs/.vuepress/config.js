import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'
import { seoPlugin } from '@vuepress/plugin-seo'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Gorim',
  description: 'Gorim is a high-level Rest framework that encourages rapid development. It is built on top of the Echo framework and provides a robust and flexible foundation for building web applications.',
  head: [
    ['link', { rel: 'icon', href: '/Gorim-logo-only.png', type: 'image/png' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'go-import', content: 'gorim.org/gorim git https://github.com/rimba47prayoga/gorim' }],
    ['meta', { name: 'http-equiv', content: '0; url=https://github.com/rimba47prayoga/gorim' }]
  ],

  theme: defaultTheme({
    logo: '/Gorim-logo-only.png',
    repo: 'https://github.com/rimba47prayoga/gorim',
    repoLabel: 'GitHub',
    navbar: [
      {
        text: "Guide",
        children: [
          { text: "Introduction", link: "/introduction.md" },
          { text: "Getting Started", link: "/get-started.md" },
          { text: "Configuration", link: "/configuration.md" },
          { text: "Routing", link: "/routing.md" },
          { text: "Middleware", link: "/middleware.md" },
        ],
      },
      {
        text: "API Reference",
        children: [
          { text: "Serializers", link: "/serializers.md" },
          { text: "Views", link: "/views.md" },
          { text: "Mixins", link: "/mixins.md" },
          { text: "Filter", link: "/filter.md" },
          { text: "Pagination", link: "/pagination.md" },
          { text: "Permissions", link: "/permissions.md" },
          { text: "Migrations", link: "/migrations.md" },
          { text: "Error Handling", link: "/error-handling.md" },
        ],
      },
    ],
    site: 'https://gorim.org',
    sidebar: [
      {
        text: 'Guide',
        children: [
          '/introduction',
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
      jsonLd: (jsonLd, page, app) => {
        console.log(jsonLd)
        return {
          "@context": "https://schema.org",
          "@graph": [
            jsonLd,
            {
              "@type": "Organization",
              "name": "Gorim",
              "url": "https://gorim.org",
              "logo": "https://gorim.org/Gorim-logo-only.png",
              "sameAs": [
                "https://github.com/rimba47prayoga/gorim"
              ]
            }
          ]
        }
      }
    }),
    sitemapPlugin({
      hostname: 'https://gorim.org',
      changefreq: 'daily',
      excludeUrls: ['/404.html'],
    }),
  ],
})
