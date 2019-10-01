const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const programsTemplate = path.resolve('./src/templates/programs.js');
  const hackersTemplate = path.resolve('./src/templates/hackers.js');
  const changelogTemplate = path.resolve('./src/templates/changelog.js');
  const glossaryTemplate = path.resolve('./src/templates/glossary.js');
  const accessibilityTemplate = path.resolve('./src/templates/accessibility.js');

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
              title
              path
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
      let template;
      if (node.frontmatter.path.includes("/programs")) {
        template = programsTemplate;
      } else if (node.frontmatter.path.includes("/hackers")) {
        template = hackersTemplate;
      } else if (node.frontmatter.path.includes("/changelog")) {
        template = changelogTemplate;
      } else if (node.frontmatter.path.includes("/glossary")) {
        template = glossaryTemplate;
      } else if (node.frontmatter.path.includes("/accessibility")) {
        template = accessibilityTemplate;
      }

      createPage({
        path: node.frontmatter.path,
        component: template,
      });
    });
  });
};
