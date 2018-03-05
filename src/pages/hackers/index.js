import React from "react"
import Link from "gatsby-link"
import Article from "../../components/article/article"

import hackersNav from "./hackers-nav.yaml"

class IndexRoute extends React.Component {
  render() {
    return (
      <Article links={hackersNav}>
        <h1>
          Hackers
        </h1>
      </Article>
    );
  }
}

export default IndexRoute
