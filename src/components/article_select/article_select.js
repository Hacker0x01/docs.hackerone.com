import React from 'react'
import Link from 'gatsby-link'

import './article_select.scss';

const Section = props => {
  return (
    <optgroup label={props.title}>
      {props.items.map((item, index) => (
        <option value={item.title} key={index}>{item.title}</option>
      ))}
    </optgroup>
  )
}

class ArticleSelect extends React.Component {
  render() {
    const links = this.props.links

    return (
      <select className="article-select">
        {links.map((section, index) => (
          <Section
            key={index}
            {...section}
            title={section.title} />
        ))}
      </select>
    )
  }
}

export default ArticleSelect
