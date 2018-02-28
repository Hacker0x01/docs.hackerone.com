import React from "react"
import Link from "gatsby-link"

import SidebarBody from "../components/sidebar_body"
import docsSidebar from "../pages/docs/doc-links.yaml"

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
      <div style={{ paddingLeft: "340px" }}>
        <div style={{ maxWidth: 1200, padding: "24px", margin: "0 auto" }}>
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
      <div>
        <SidebarBody inline yaml={docsSidebar} />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query DocByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
