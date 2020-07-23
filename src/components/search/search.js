import React from "react";

import "./search.scss";
import "./algolia.css";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      enabled: true
    };
  }
  componentDidMount() {
    if (window.docsearch) {
      window.docsearch({
        // the following information is copied from the gatsby-config.js file
        // if you change anything below, make sure to also change it in that
        // file. We're duplicating this code to avoid a race condition in the
        // MutationObserver logic, where the docsearch script (npm package)
        // was loaded *before* this component was loaded.
        apiKey: "acfb7def12803db2cd4ac0539b2b571a",
        indexName: "hackerone",
        inputSelector: "#algolia-doc-search",
        transformData: suggestions => {
          // ideally, we'd have an `id` or `name` attribute for all headers, so that DocSearch
          // properly indexes the anchors. Since we don't have that yet, we've went with this
          // temporary workaround to remove the ___gatsby anchor from the URL. This code can be
          // removed when the appropriate attributes are added. Ref T19586.
          return suggestions.map(suggestion => {
            delete suggestion.anchor;

            suggestion.url = suggestion.url.replace(/#gatsby-focus-wrapper$/, "");

            return suggestion;
          });
        }
      });
    } else {
      console.warn("Search has failed to load and now is being disabled");
      this.setState({ enabled: false });
    }
  }

  render() {
    const { enabled } = this.state;

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
    ) : null;
  }
}

export default Search;
