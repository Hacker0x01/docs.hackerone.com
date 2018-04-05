import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header/header'

import "../fonts/effra.css"
import "../css/main.css"
import "../css/algolia.css"

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="HackerOne Documentation"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div style={{ paddingTop: 60 }}>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
