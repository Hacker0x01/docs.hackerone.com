import React from "react";
import PostLink from "../components/post_link";

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  const Docs = edges
    .filter(edge => !!edge.node.frontmatter.part) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

  return <div>{Docs}</div>;
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___path] }) {
      edges {
        node {
          id
          frontmatter {
            path
            part
            section
            title
          }
        }
      }
    }
  }
`;
