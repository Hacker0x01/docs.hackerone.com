import React from "react"
import Link from "gatsby-link"

import Sidebar from "../components/sidebar/sidebar"
import hackersNav from "../pages/hackers/hackers-nav.yaml"

export default function Template({ data }) {
  const { markdownRemark } = data;
  return (
    <div>
      <div style={{ paddingLeft: "340px" }}>
        <div style={{ maxWidth: 1200, padding: "24px", margin: "0 auto" }}>
          <h1>{markdownRemark.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        </div>
      </div>
      <div>
        <Sidebar links={hackersNav} />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query hackersDocByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
