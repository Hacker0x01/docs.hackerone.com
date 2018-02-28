import React from "react"
import Link from "gatsby-link"
import logo from "./logo.svg"

import styles from './navigation.module.css'

const NavItem = ({ linkTo, children }) => (
  <li className={styles.item}>
    <Link to={linkTo} className={styles.link}>
      {children}
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
        <NavItem linkTo="/docs/">Hackers</NavItem>
        <NavItem linkTo="/tutorial/">Programs</NavItem>
      </ul>
    </div>
  )
}
