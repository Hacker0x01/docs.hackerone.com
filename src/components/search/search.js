import React from "react";

import { DocSearch } from "@docsearch/react";
import "@docsearch/css";

function Search() {
  return (
    <DocSearch
      appId="JNZ23QXOBB"
      apiKey="9a387ea0841a8a1d573b6c7d3ee1df08"
      indexName="hackerone"
    />
  );
}

export default Search;
