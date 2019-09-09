import React from "react";
import Helmet from "react-helmet";
import { Link, withPrefix } from "gatsby-link";
import GatsbyConfig from "../../../gatsby-config";

import Sidebar from "../../components/sidebar/sidebar";
import ArticleSelect from "../../components/article_select/article_select";
import ToC from "../toc";
import "./article.scss";

const findActiveSectionByPath = (pathname, sections) => {
  let match;
  let activeSection;

  sections.forEach(section => {
    const match = section.items.some(
      item =>
        pathname === withPrefix(item.path) ||
        (item.items &&
          item.items.some(subitem => pathname === withPrefix(subitem.path)))
    );

    if (match) {
      activeSection = section;
    }
  });

  return activeSection;
};

const findActiveChildByPath = (pathname, sections) => {
  let match;
  let activeChild;

  sections.forEach(section => {
    section.items.some(item => {
      if (item.items) {
        match =
          item.items.some(subitem => {
            return pathname === withPrefix(subitem.path);
          }) || pathname === withPrefix(item.path);

        if (match) {
          activeChild = item.items;
        }
      }
    });
  });

  return activeChild;
};

class IndexRoute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      voted: false
    };

    this.handleVote = this.handleVote.bind(this);
  }

  handleVote(direction) {
    return e => {
      e.preventDefault();

      this.setState({
        voted: true
      });

      window.ga &&
        window.ga(
          "send",
          "event",
          "votes",
          direction,
          window.location.pathname
        );
    };
  }

  render() {
    const { links, path, title, children, description, headings } = this.props;
    const githubRepo =
      "https://github.com/Hacker0x01/docs.hackerone.com/blob/master/docs/";

    const globalWindow =
      typeof window !== "undefined"
        ? window.location.pathname
        : withPrefix(path);

    return (
      <div className="article">
        <Helmet
          title={`${title} | ${GatsbyConfig.siteMetadata.title}`}
          meta={[
            description
              ? {
                  name: "description",
                  content: description
                }
              : {}
          ]}
        />
        <Sidebar
          activeSection={findActiveSectionByPath(globalWindow, links)}
          activeChild={findActiveChildByPath(globalWindow, links)}
          links={links}
        />

        <article className="article__inner">
          <ArticleSelect links={links} currentPath={globalWindow} />

          {this.props.children}
          {this.props.docOnGithub ? (
            <div className="footer__inner">
              <div className="footer-row">
                <div className="footer-column footer-column--left">
                  <div className="footer-column-block">
                    <a href={githubRepo + this.props.docOnGithub}>
                      Edit this page on GitHub
                    </a>
                  </div>
                </div>

                <div className="footer-column footer-column--center">
                  <div className="footer-column-block">
                    {this.state.voted ? (
                      <span>Thanks for your feedback!</span>
                    ) : (
                      <span>
                        Was this article helpful?{" "}
                        <a
                          href=""
                          onClick={this.handleVote("up")}
                          className="upvote upvote--up"
                        >
                          👍
                        </a>{" "}
                        <a
                          href=""
                          onClick={this.handleVote("down")}
                          className="upvote upvote--down"
                        >
                          👎
                        </a>
                      </span>
                    )}
                  </div>
                </div>

                <div className="footer-column footer-column--right">
                  <div className="footer-column-block">
                    <a href="https://www.hackerone.com" target="_blank">
                      Back to HackerOne
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </article>

        <ToC headings={headings} />
      </div>
    );
  }
}

export default IndexRoute;
