import React from "react"
import Link from "gatsby-link"

import "../css/sidebar_body.scss"

const Section = props => (
  <div className="sidebar-body__section">
    <h3 className="sidebar-body__title">
      {props.title}
    </h3>
    <SectionLinks
      {...props}
      title={props.title}
      isTutorial={props.title === `Tutorial`}
    />
  </div>
)

const SectionLinks = props => {
  return (
    <ul className="sidebar-body__items">
      {props.items.map((item, index) => (
        <SectionLink
          node={item}
          children={item.items}
          key={index}
          isInline={props.isInline}
        />
      ))}
    </ul>
  )
}

const SectionLink = props => {
  // Don't show the main docs link on mobile as we put these
  // links on that main docs page so it's confusing to have
  // the page link to itself.
  if (props.isInline && props.node.link === `/docs/`) {
    return null
  }

  let childnodes = null
  if (props.children) {
    childnodes = props.children.map((childnode, index) => (
      <SectionLink key={index} node={childnode} children={childnode.items} />
    ))
  }

  const item = props.node

  // If the last character is a * then the doc page is still in draft
  const isDraft = item.title.slice(-1) === `*`
  const title = isDraft ? item.title.slice(0, -1) : item.title

  return (
    <li className="sidebar-body__item" key={item.title}>
      {item.link.charAt(0) == `#` ? (
        <a href={item.link} className="sidebar-body__item">
          {title}
        </a>
      ) : (
        <Link
          to={item.link}
          activeClassName="sidebar-body__item--active"
          className="sidebar-body__item"
          exact
        >
          {title}
        </Link>
      )}
      {childnodes ? <ul className="sidebar-body__sub-items">{childnodes}</ul> : null}
    </li>
  )
}

class SidebarBody extends React.Component {
  render() {
    const menu = this.props.yaml
    const isInline = this.props.inline

    return (
      <div className="sidebar-body">
        {menu.map((section, index) => (
          <div
            key={index}
          >
            <Section
              {...section}
              title={section.title}
              index={index}
              isInline={isInline}
            />
          </div>
        ))}
      </div>
    )
  }
}

export default SidebarBody
