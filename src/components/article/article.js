import React from "react"
import Link from "gatsby-link"

import Sidebar from "../../components/sidebar/sidebar"

import styles from "../../css/utilities.module.css"

class IndexRoute extends React.Component {
  render() {
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
        </div>
      </div>
    );
  }
}

export default IndexRoute
