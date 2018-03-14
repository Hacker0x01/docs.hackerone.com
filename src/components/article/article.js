import React from "react"
import Link from "gatsby-link"

import Sidebar from "../../components/sidebar/sidebar"

import styles from "../../css/utilities.module.css"

class IndexRoute extends React.Component {
  render() {
    const githubRepo =
      "https://github.com/hacker0x01/docs.hackerone.com/blob/master/docs"

    return (
      <div className={styles.wrapper}>
        <div style={{ display: "flex" }}>
          <Sidebar links={this.props.links} />
          <article style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: "1",
            flexShrink: "1",
            flexBasis: "auto",
            justifyContent: "flex-start",
            alignItems: "stretch",
            padding: "24px 0 24px 48px"
          }}>
            {this.props.children}
          </article>
          {this.props.docOnGithub ?
            <div>
              <a href={githubRepo + this.props.docOnGithub}>
                Edit this page on GitHub
              </a>
            </div> : null
          }
        </div>
      </div>
    );
  }
}

export default IndexRoute
