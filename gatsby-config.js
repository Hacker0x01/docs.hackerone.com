module.exports = {
  siteMetadata: {
    title: 'HackerOne Platform Documentation',
  },
  pathPrefix: '/docs.hackerone.com',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/docs/`,
        name: "markdown-pages",
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-plugin-sharp',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
              linkImagesToOriginal: true,
            },
          },
        ],
      },
    },
  ],
};
