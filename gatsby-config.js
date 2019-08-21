module.exports = {
  siteMetadata: {
    title: 'HackerOne Platform Documentation',
    siteUrl: 'https://docs.hackerone.com',
    description: 'Get instant answers to the most common questions and learn how to use HackerOne.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-layout',
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
        mergeScriptHashes: true,
        mergeStyleHashes: true,
        mergeDefaultDirectives: true,
        directives: {
          "script-src": "'self' www.google-analytics.com cdn.jsdelivr.net",
          "connect-src": "'self' www.google-analytics.com fbhzv4f2nk7b.statuspage.io"
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-49905813-10",
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
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 500
            },
          },
        ],
      },
    },
  ],
};
