module.exports = {
  siteMetadata: {
    title: 'HackerOne Platform Documentation',
    siteUrl: 'https://docs.hackerone.com',
    description: 'Get instant answers to the most common questions and learn how to use HackerOne.',
    author: {
      name: 'HackerOne',
    },
  },
  plugins: [
    'gatsby-plugin-meta-redirect',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-layout',
    'gatsby-plugin-slug',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/docs/`,
        name: "docs",
      },
    },
    {
      resolve: 'gatsby-plugin-sri',
      options: {
        hash: 'sha384'
      },
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        mergeScriptHashes: false,
        mergeStyleHashes: false,
        mergeDefaultDirectives: true,
        directives: {
          "script-src": "'self' 'unsafe-eval' 'unsafe-inline' www.google-analytics.com cdn.jsdelivr.net *.algolia.net *.algolianet.com",
          "style-src": "'self' 'unsafe-inline' cdn.jsdelivr.net",
          "connect-src": "'self' www.google-analytics.com fbhzv4f2nk7b.statuspage.io *.algolia.net *.algolianet.com",
          "frame-src": "www.youtube-nocookie.com"
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-5MPJXDDK9D",
        head: false,
        anonymize: true,
        respectDNT: true,
        forceSSL: true,
        transport: "beacon",
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              offsetY: 68,
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 500,
              linkImagesToOriginal: false
            },
          },
        ],
      },
    },
    {
      resolve: '@fec/gatsby-plugin-advanced-feed',
      options: {
        feeds: [
          {
            title: 'HackerOne Platform Changelog',
            description: "See what's changed or new in HackerOne.",
            link: 'https://docs.hackerone.com/changelog',
            id: 'https://docs.hackerone.com/changelog',
            createLinkInHead: /^\/changelog/,
            match: '^/changelog/',
            output: {
              rss2: '/changelog/rss.xml',
              atom: '/changelog/atom.xml',
              json: '/changelog/feed.json',
            },
          },
        ],
      },
    },
  ],
};
