import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header/header'

import '../fonts/effra.scss'
import '../css/main.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Product Documentation"
      meta={[
        {
          name: 'description',
          content:
            'Get instant answers to the most common questions and learn how to use HackerOne.',
        },
      ]}
    />
    <Header />
    <div className="wrapper">{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
