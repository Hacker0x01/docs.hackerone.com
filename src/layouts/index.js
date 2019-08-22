import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import GatsbyConfig from "../../gatsby-config";

import Header from "../components/header/header";

import "../fonts/effra/effra.scss";
import "../fonts/material-icons/material-icons.scss";

import "../css/main.scss";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      defaultTitle={GatsbyConfig.siteMetadata.title}
      meta={[
        {
          name: "description",
          content: GatsbyConfig.siteMetadata.description
        },
        {
          name: "og:type",
          content: "website"
        },
        {
          name: "og:site_name",
          content: GatsbyConfig.siteMetadata.title
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:creator",
          content: "@Hacker0x01"
        },
        {
          name: "twitter:site",
          content: "@Hacker0x01"
        }
      ]}
      htmlAttributes={{ lang: "en" }}
    />
    <Header />
    <div className="wrapper">{children}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.object
};

export default TemplateWrapper;
