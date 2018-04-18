import React from 'react'
import Link from 'gatsby-link'

export default function Template({ data }) {
  const { markdownRemark } = data
  return (
    <div className="article">
      <div>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query ChangelogByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
