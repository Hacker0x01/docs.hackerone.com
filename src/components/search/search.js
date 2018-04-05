import React from 'react'

import './search.scss'
import './algolia.css'

type State = {
  enabled: boolean,
}

class Search extends React.Component {
  state = {
    enabled: true,
  }

  componentDidMount() {
    if (window.docsearch) {
      window.docsearch({
        apiKey: 'acfb7def12803db2cd4ac0539b2b571a',
        indexName: 'hackerone',
        inputSelector: '#algolia-doc-search',
      })
    } else {
      console.warn('Search has failed to load and now is being disabled')
      this.setState({ enabled: false })
    }
  }

  render() {
    const { enabled } = this.state

    return enabled ? (
      <form className="search">
        <input
          className="search__input"
          id="algolia-doc-search"
          type="search"
          placeholder="Search docs"
          aria-label="Search docs"
        />
      </form>
    ) : null
  }
}

export default Search
