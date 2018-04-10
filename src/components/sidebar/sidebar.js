import React from 'react'
import Link from 'gatsby-link'
import classNames from 'classnames'
import './sidebar.scss'

const Section = props => {
  return (
    <div className="sidebar__section">
      <h3 className="sidebar__title" onClick={props.onSectionTitleClick}>
        {props.title}
      </h3>
      <SectionLinks {...props} title={props.title} />
    </div>
  )
}

const SectionLinks = props => {
  const classes = classNames('sidebar__items', {
    'sidebar__items--active': props.isActive,
  })

  return (
    <ul className={classes}>
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
  constructor(props) {
    super(props)

    this.state = {
      activeSection: props.defaultActiveSection,
    }
  }

  toggleSection(section) {
    this.setState(state => ({
      activeSection: this.state.activeSection === section ? null : section,
    }))
  }

  render() {
    const links = this.props.links

    return (
      <div className="sidebar">
        <div className="sidebar__wrapper">
          <div className="sidebar__body">
            {links.map((section, index) => (
              <div key={index}>
                <Section
                  {...section}
                  onSectionTitleClick={() => this.toggleSection(section)}
                  isActive={
                    this.state.activeSection === section ||
                    section.items.length === 1
                  }
                  title={section.title}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar
