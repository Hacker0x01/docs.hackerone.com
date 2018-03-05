import React from "react"
import Link from "gatsby-link"
import logo from "./logo.svg"

import styles from './navigation.module.css'

const NavItem = ({ linkTo, title }) => (
  <li className={styles.item}>
    <Link
        to={linkTo}
        activeClassName={styles.linkActive}
        className={styles.link}
      >
      {title}
    </Link>
  </li>
)

export default ({ pathname }) => {
  return (
    <div role="navigation" className={styles.wrapper}>
      <Link
        to="/"
        className={styles.logo}
      >
        <img src={logo} className={styles.logoImage} alt="" />
      </Link>
      <ul className={styles.list}>
        <NavItem
          linkTo="/hackers"
          title="Hackers" />
        <NavItem
          linkTo="/programs"
          title="Programs" />
      </ul>
    </div>
  )
}
