import React from 'react';

type State = {
  enabled: boolean,
};

class DocSearch extends React.Component {
  state = {
    enabled: true,
  };

  componentDidMount() {
    if (window.docsearch) {
      window.docsearch({
        apiKey: 'acfb7def12803db2cd4ac0539b2b571a',
        indexName: 'hackerone', 
        inputSelector: "#algolia-doc-search",
      });
    } else {
      console.warn('Search has failed to load and now is being disabled');
      this.setState({enabled: false});
    }
  }

  render() {
    const {enabled} = this.state;

    return enabled ? (
      <form
        style={{
          display: "flex",
          flex: "0 0 auto",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: "0.5rem",
          paddingRight: "0.5rem",
        }}>
        <input
          style={{
            appearance: "none",
            background: "transparent",
            border: 0,
            color: "#fff",
            fontSize: 18,
            fontWeight: 300,
            fontFamily: "inherit",
            position: "relative",
            padding: "5px",
          }}
          id="algolia-doc-search"
          type="search"
          placeholder="Search docs"
          aria-label="Search docs"
        />
      </form>
    ) : null;
  }
}

export default DocSearch;
