import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import GatsbyConfig from "../../../gatsby-config";
import { graphql } from "gatsby";
import Slugger from "github-slugger";

import "./glossary.scss";

class IndexRoute extends React.Component {
  slug(value) {
    return new Slugger().slug(value);
  }

  render() {
    const { edges } = this.props.data.allMarkdownRemark;

    const groupedByAlphabet = {};

    edges.map((item, index) => {
      const firstLetter = item.node.frontmatter.title.charAt(0);

      if (groupedByAlphabet[firstLetter] == undefined) {
        groupedByAlphabet[firstLetter] = [];
      }

      groupedByAlphabet[firstLetter].push(item);
    });

    const allLetters = Object.keys(groupedByAlphabet);

    return (
      <div className="glossary article">
        <Helmet title={`Glossary | ${GatsbyConfig.siteMetadata.title}`} />
        <div className="sidebar">
          <div className="sidebar__wrapper">
            <div className="sidebar__body">
              {allLetters.map((letter, index) => {
                return (
                  <div className="sidebar__section" key={index}>
                    <h3 className="sidebar__title sidebar__title--active">
                      {letter}
                    </h3>
                    <ul className="sidebar__items sidebar__items--active">
                      {groupedByAlphabet[letter].map((item, index) => {
                        return (
                          <li className="sidebar__item" key={index}>
                            <a
                              href={`#${this.slug(
                                item.node.frontmatter.title
                              )}`}
                            >
                              {item.node.frontmatter.title}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="article__inner">
          <h1>Glossary</h1>
          {edges.map((item, index) => {
            return (
              <div
                className="glossary__wrapper"
                key={item.node.frontmatter.title}
              >
                <h2 id={this.slug(item.node.frontmatter.title)}>
                  {item.node.frontmatter.title}
                </h2>
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
  query glossaryIndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/glossary/" } } }
      sort: { order: ASC, fields: [frontmatter___title] }
      limit: 1000
    ) {
      edges {
        node {
          html
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`;
