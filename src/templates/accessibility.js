import React from "react";
import Link from "gatsby-link";
import { graphql } from "gatsby";
import Article from "../components/article/article";
import accessibilityNav from "../pages/accessibility/accessibility-nav.yaml";

export default function Template({ data }) {
  const { markdownRemark } = data;
  return (
    <Article
      links={accessibilityNav}
      path={markdownRemark.frontmatter.path}
      title={markdownRemark.frontmatter.title}
      description={markdownRemark.frontmatter.description}
      headings={markdownRemark.headings}
      docOnGithub={`${markdownRemark.frontmatter.id}.md`}
    >
      <h1>{markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </Article>
  );
}

export const pageQuery = graphql`
  query accessibilityDocByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        id
        title
        description
      }
      headings(depth: h3) {
        value
      }
    }
  }
`;
