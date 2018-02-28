import React from "react";
import Link from "gatsby-link";

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path}>
      {post.frontmatter.title} ({post.frontmatter.part} {post.frontmatter.part ? `> ${post.frontmatter.section}` : null})
    </Link>
  </div>
);

export default PostLink;
