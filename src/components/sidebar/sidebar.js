import React from "react"
import Link from "gatsby-link"

import styles from "./sidebar.module.css"

const Section = props => (
  <div className={styles.section}>
    <h3 className={styles.title}>
      {props.title}
    </h3>
    <SectionLinks {...props} title={props.title} />
  </div>
)

const SectionLinks = props => {
  return (
    <ul className={styles.items}>
      {props.items.map((item, index) => (
        <SectionLink
          node={item}
          children={item.items}
          key={index}
        />
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
    <li className={styles.item} key={item.title}>
      <Link
        to={item.path}
        activeClassName={styles.linkActive}
        className={styles.link}
      >
        {item.title}
      </Link>
      {childnodes ? <ul className={styles.subItems}>{childnodes}</ul> : null}
    </li>
  )
}

class Sidebar extends React.Component {
  render() {
    const links = this.props.links

    return (
      <div className={styles.body}>
        {links.map((section, index) => (
          <div key={index}>
            <Section
              {...section}
              title={section.title}
              index={index}
            />
          </div>
        ))}
      </div>
    )
  }
}

export default Sidebar
