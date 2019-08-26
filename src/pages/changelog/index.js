import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import slugify from "slugify";
import GatsbyConfig from "../../../gatsby-config";
import { graphql } from "gatsby";

import "./changelog.scss";

class IndexRoute extends React.Component {
  render() {
    const { edges } = this.props.data.allMarkdownRemark;

    return (
      <div className="changelog article">
        <Helmet title={`Changelog | ${GatsbyConfig.siteMetadata.title}`} />
        <div className="sidebar">
          <div className="sidebar__wrapper">
            <div className="sidebar__body">
              <ul className="sidebar__items sidebar__items--active">
                {edges.map((item, index) => {
                  return (
                    <li className="sidebar__item">
                      <a href={`#${slugify(item.node.frontmatter.path)}`}>
                        {item.node.frontmatter.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="article__inner">
          <h1>Changelog</h1>
          <p>See what's changed or new in HackerOne.</p>
          {edges.map((item, index) => {
            return (
              <div className="changelog__wrapper">
                <div
                  className="changelog__anchor"
                  id={slugify(item.node.frontmatter.path)}
                />
                <h2>{item.node.frontmatter.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: item.node.html }} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default IndexRoute;

export const pageQuery = graphql`
  query changelogIndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/changelog/" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          html
          frontmatter {
            path
            title
            date
          }
        }
      }
    }
  }
`;
