const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const programsTemplate = path.resolve('./src/templates/programs.js');
  const hackersTemplate = path.resolve('./src/templates/hackers.js');

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___title] }
        limit: 1000
      ) {
        edges {
          node {
            html
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      console.log(node);
      let template, book;
      if (node.frontmatter.path.includes("programs/")) {
        template = programsTemplate;
      } else if (node.frontmatter.path.includes("hackers/")) {
        template = hackersTemplate;
      }

      createPage({
        path: node.frontmatter.path,
        component: template,
      });
    });
  });
};
