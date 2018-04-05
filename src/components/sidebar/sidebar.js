import React from 'react'
import Link from 'gatsby-link'

import './sidebar.scss'

const Section = props => (
  <div className="sidebar__section">
    <h3 className="sidebar__title">{props.title}</h3>
    <SectionLinks {...props} title={props.title} />
  </div>
)

const SectionLinks = props => {
  return (
    <ul className="sidebar__items">
      {props.items.map((item, index) => (
        <SectionLink node={item} children={item.items} key={index} />
      ))}
    </ul>
  )
}

const SectionLink = props => {
  let childnodes = null
  if (props.children) {
    childnodes = props.children.map((childnode, index) => (
      <SectionLink key={index} node={childnode} children={childnode.items} />
    ))
  }

  const item = props.node

  return (
    <li className="sidebar__item" key={item.title}>
      {item.path ? (
        <Link
          to={item.path}
          activeClassName="sidebar__link--active"
          className="sidebar__link"
        >
          {item.title}
        </Link>
      ) : (
        <span className="sidebar__link--disabled">{item.title}</span>
      )}
      {childnodes ? <ul className="sidebar__sub-items">{childnodes}</ul> : null}
    </li>
  )
}

class Sidebar extends React.Component {
  render() {
    const links = this.props.links

    return (
      <div className="sidebar">
        <div className="sidebar__wrapper">
          <div className="sidebar__body">
            {links.map((section, index) => (
              <div key={index}>
                <Section {...section} title={section.title} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar
