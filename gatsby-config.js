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
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              offsetY: 68,
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 500
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-algolia-docsearch',
      options: {
        apiKey: "acfb7def12803db2cd4ac0539b2b571a",
        indexName: "hackerone",
        inputSelector: "#algolia-doc-search",
      },
    },
  ],
};
