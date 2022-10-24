import React from "react";

import { DocSearch } from "@docsearch/react";
import "@docsearch/css";

function Search() {
  return (
    <DocSearch
      appId=""
      apiKey="acfb7def12803db2cd4ac0539b2b571a"
      indexName="hackerone"
    />
  );
}

export default Search;
