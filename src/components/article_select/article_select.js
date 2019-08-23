import React from "react";
import { Link, withPrefix } from "gatsby-link";
import is from "is_js";

import "./article_select.scss";

const Options = props => {
  let itemsToRender = [];

  props.items.map(item => {
    itemsToRender.push(
      <Option key={item.title} {...item}>
        {item.title}
      </Option>
    );

    if (item.hasOwnProperty("items")) {
      item.items.map(item => {
        itemsToRender.push(
          <Option key={item.title} {...item}>
            &nbsp;&nbsp; {item.title}
          </Option>
        );
      });
    }
  });

  return <optgroup label={props.title}>{itemsToRender}</optgroup>;
};

const Option = props => {
  return <option value={props.path}>{props.children}</option>;
};

class ArticleSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPath: props.currentPath
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ currentPath: event.target.value });

    const newLocation = (window.location.href = withPrefix(event.target.value));
    return typeof window !== "undefined" ? newLocation : "/";
  }

  render() {
    const links = this.props.links;

    return (
      <select
        className="article-select"
        onChange={this.handleChange}
        value={this.state.currentPath}
      >
        {links.map((section, index) => (
          <Options key={index} {...section} title={section.title} />
        ))}
      </select>
    );
  }
}

export default ArticleSelect;
