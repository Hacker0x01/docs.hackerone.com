import React from 'react'
import Link from 'gatsby-link'
import Search from '../search/search'
import logo from './logo.svg'

import './navigation.scss'

const NavItem = ({ linkTo, title }) => (
  <li className="navigation__item">
    <Link
      to={linkTo}
      activeClassName="navigation__link--active"
      className="navigation__link"
    >
      {title}
    </Link>
  </li>
)

export default ({ pathname }) => {
  return (
    <div role="navigation" className="navigation__wrapper">
      <Link to="/" className="navigation__logo">
        <img src={logo} className="navigation__logo-image" alt="" />
      </Link>
      <ul className="navigation__list">
        <NavItem linkTo="/hackers/" title="Hackers" />
        <NavItem linkTo="/programs/" title="Programs" />
        <li className="navigation__item">
          <a
            className="navigation__link"
            href="https://api.hackerone.com"
            target="_blank"
          >
            API
          </a>
        </li>
        <NavItem linkTo="/changelog" title="Changelog" />
      </ul>

      <Search />
    </div>
  )
}
