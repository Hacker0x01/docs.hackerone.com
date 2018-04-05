import React from "react"
import Link from "gatsby-link"

import Sidebar from "../../components/sidebar/sidebar"

import "./article.scss"

class IndexRoute extends React.Component {
  render() {
    const githubRepo =
      "https://github.com/hacker0x01/docs.hackerone.com/blob/master/docs"

    return (
      <div className="article">
        <Sidebar links={this.props.links} />
        <article className="article__inner">
          {this.props.children}

          {this.props.docOnGithub ?
            <div className="footer__inner">
              <a href={githubRepo + this.props.docOnGithub}>
                Edit this page on GitHub
              </a>
            </div> : null
          }
        </article>
      </div>
    );
  }
}

export default IndexRoute
