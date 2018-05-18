import React from 'react'
import Link from 'gatsby-link'
import Search from '../search/search'
import Status from '../status/status'
import logo from './logo.svg'

import './navigation.scss'

const NavItem = ({ linkTo, title }) => {
  const isActive = to => (match, location) => location.pathname.includes(to)

  return (
    <li className="navigation__item">
      <Link
        exact={true}
        to={linkTo}
        activeClassName="navigation__link--active"
        className="navigation__link"
        isActive={isActive(`/${title.toLowerCase()}`)}
      >
        {title}
      </Link>
    </li>
  )
}

export default ({ pathname }) => {
  return (
    <div role="navigation" className="navigation__wrapper">
      <Link to="/" className="navigation__logo">
        <img src={logo} className="navigation__logo-image" alt="" />
      </Link>
      <ul className="navigation__list">
        <NavItem linkTo="/hackers.html" title="Hackers" />
        <NavItem linkTo="/programs.html" title="Programs" />
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

      <Status />

      <Search />
    </div>
  )
}
