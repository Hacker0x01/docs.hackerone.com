import React from 'react'
import { Link, withPrefix } from 'gatsby-link'
import is from 'is_js'

import './article_select.scss';

const Section = props => {
  return (
    <optgroup label={props.title}>
      {props.items.map((item, index) => (
        <option
          value={item.path}
          key={index}
        >
          {item.title}
        </option>
      ))}
    </optgroup>
  )
}

class ArticleSelect extends React.Component {
  handleChange(event) {
    const newLocation = window.location.href = withPrefix(event.target.value);
    return typeof window !== 'undefined' ? newLocation : "/";
  }

  render() {
    const links = this.props.links

    return (
      <select
        className="article-select"
        onChange={this.handleChange}
        value={this.props.currentPath}
      >
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
