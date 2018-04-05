import React from 'react'
import Link from 'gatsby-link'
import Article from '../../components/article/article'

import programsNav from './programs-nav.yaml'

class IndexRoute extends React.Component {
  render() {
    return (
      <Article links={programsNav}>
        <h1>Programs</h1>
      </Article>
    )
  }
}

export default IndexRoute
