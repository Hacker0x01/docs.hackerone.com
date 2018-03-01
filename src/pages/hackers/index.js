import React from "react"
import Link from "gatsby-link"

import Sidebar from "../../components/sidebar/sidebar"
import hackerNav from "./hackers-nav.yaml"

class IndexRoute extends React.Component {
  render() {
    return (
      <div>
        <div style={{ paddingLeft: "340px" }}>
          <div style={{ maxWidth: 840, padding: "24px", margin: "0 auto" }}>
            <h1 id="get-started">
              Hackers
            </h1>
          </div>
        </div>
        <div>
          <Sidebar links={hackerNav} />
        </div>
      </div>
    )
  }
}

export default IndexRoute
