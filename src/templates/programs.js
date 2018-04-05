import React from 'react'
import Link from 'gatsby-link'
import Article from '../components/article/article'
import programsNav from '../pages/programs/programs-nav.yaml'

export default function Template({ data }) {
  const { markdownRemark } = data
  return (
    <Article
      links={programsNav}
      docOnGithub={`${markdownRemark.frontmatter.path}.md`}
    >
      <h1>{markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </Article>
  )
}

export const pageQuery = graphql`
  query programsDocByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
