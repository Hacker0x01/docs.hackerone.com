import React from "react";
import Link from "gatsby-link";
import { graphql } from "gatsby";
import Article from "../../components/article/article";

import accessibilityNav from "./accessibility-nav.yaml";

class IndexRoute extends React.Component {
  render() {
    const { markdownRemark } = this.props.data;

    return (
      <Article
        links={accessibilityNav}
        path={markdownRemark.frontmatter.path}
        docOnGithub={`${markdownRemark.frontmatter.id}.md`}
        title={markdownRemark.frontmatter.title}
        description={markdownRemark.frontmatter.description}
      >
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </Article>
    );
  }
}

export default IndexRoute;

export const pageQuery = graphql`
  query accessibilityIndexQuery {
    markdownRemark(frontmatter: { bookIndexFor: { eq: "accessibility" } }) {
      html
      frontmatter {
        path
        id
        title
        bookIndexFor
        description
      }
    }
  }
`;
