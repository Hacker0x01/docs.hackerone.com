import React from "react"
import Link from "gatsby-link"

import SidebarBody from "../../components/sidebar_body"
import docsSidebar from "./doc-links.yaml"

class IndexRoute extends React.Component {
  render() {
    return (
      <div>
        <div style={{ paddingLeft: "340px" }}>
          <div style={{ maxWidth: 840, padding: "24px", margin: "0 auto" }}>
            <h1 id="get-started">
              Get started
            </h1>
            <p>Gatsby is a blazing-fast static site generator for React.</p>
            <h2>Install Gatsby{`'`}s command line tool</h2>
            <p>
              <code>npm install --global gatsby-cli</code>
            </p>
            <h2 id="using-the-gatsby-cli">Using the Gatsby CLI</h2>
            <ol>
              <li>
                Create a new site.
                {` `}
                <code>gatsby new gatsby-site</code>
              </li>
              <li>
                <code>cd gatsby-site</code>
              </li>
              <li>
                <code>gatsby develop</code> — Gatsby will start a hot-reloading
                development environment accessible at <code>localhost:8000</code>
              </li>
              <li>
                Try editing the javascript pages in <code>src/pages</code>. Saved
                changes will live reload in the browser.
              </li>
              <li>
                <code>gatsby build</code> — Gatsby will perform an optimized
                production build for your site generating static HTML and per-route
                JavaScript code bundles.
              </li>
              <li>
                <code>gatsby serve</code> — Gatsby starts a local HTML server for
                testing your built site.
              </li>
            </ol>
            <h2 id="using-other-starters">Using other starters</h2>
            <p>
              Running <code>gatsby new</code> installs the default Gatsby starter.
              There are{` `}
              <Link to="/docs/gatsby-starters/">
                many other official and community starters
              </Link>
              {` `}
              you can use to kickstart building your Gatsby site.
            </p>
            <h2 id="work-through-the-tutorial">Work through the tutorial</h2>
            <p>
              It walks you through building a Gatsby site from scratch to a finished
              polished site.
              {` `}
              <Link to="/tutorial/">Go to the tutorial</Link>.
            </p>
          </div>
        </div>
        <div>
          <SidebarBody inline yaml={docsSidebar} />
        </div>
      </div>
    )
  }
}

export default IndexRoute
