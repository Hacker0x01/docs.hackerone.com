import React from "react";

import "./search.scss";
import "./algolia.css";

class Search extends React.Component {
  render() {
    return (
      <form className="search">
        <input
          className="search__input"
          id="algolia-doc-search"
          type="search"
          placeholder="Search docs"
          aria-label="Search docs"
        />
      </form>);
  }
}

export default Search;
