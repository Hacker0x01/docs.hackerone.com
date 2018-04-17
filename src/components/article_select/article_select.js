import React from 'react'
import { Link, withPrefix } from 'gatsby-link'
import is from 'is_js'

import './article_select.scss';

const Options = props => {
  let itemsToRender = [];

  props.items.map((item, index) => {
    if (item.hasOwnProperty("items")) {
      itemsToRender.push(
        <option
          value={item.path}
          key={item.title}
        >
          {item.title}
        </option>
      )

      item.items.map((item, index) => {
        itemsToRender.push(
          <option
            value={item.path}
            key={item.title}
          >
            &nbsp;&nbsp; {item.title}
          </option>
        )
      })
    } else {
      itemsToRender.push(
        <option
          value={item.path}
          key={item.title}
        >
          {item.title}
        </option>
      )
    }
  })

  return <optgroup label={props.title}>
    {itemsToRender}
  </optgroup>;
}

const Option = props => {
  return (
    <option
      value={props.path}
      key={props.title}
    >
      {props.title}
    </option>
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
          <Options
            key={index}
            {...section}
            title={section.title} />
        ))}
      </select>
    )
  }
}

export default ArticleSelect
