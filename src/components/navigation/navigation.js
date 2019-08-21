import React from 'react'
import Link from 'gatsby-link'
import Search from '../search/search'
import Status from '../status/status'
import logo from './logo.svg'
import classnames from 'classnames'

import './navigation.scss'

const NavItem = ({ linkTo, title }) => {
  const isActive = location.pathname.includes(`/${title.toLowerCase()}`);

  return (
    <li className="navigation__item">
      <Link
        to={linkTo}
        activeClassName="navigation__link--active"
        className={classnames("navigation__link", {
          "navigation__link--active": isActive
        })}
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
        <NavItem linkTo="/glossary" title="Glossary" />
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
