import React from "react";
import Link from "gatsby-link";
import Search from "../search/search";
import Status from "../status/status";
import logo from "./logo.svg";
import classNames from "classnames";

import "./navigation.scss";

const NavItem = ({ linkTo, title }) => {
  const linkProps = to => ({ location }) => {
    return {
      className: classNames("navigation__link", {
        "navigation__link--active": location.pathname.includes(to)
      })
    };
  };

  return (
    <li className="navigation__item">
      <Link to={linkTo} getProps={linkProps(`/${title.toLowerCase()}`)}>
        {title}
      </Link>
    </li>
  );
};

export default ({ pathname }) => {
  return (
    <div role="navigation" className="navigation__wrapper">
      <Link to="/" className="navigation__logo">
        <img src={logo} className="navigation__logo-image" alt="" />
      </Link>
      <ul className="navigation__list">
        <NavItem linkTo="/hackers.html" title="Hackers" />
        <NavItem linkTo="/organizations.html" title="Organizations" />
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
        <NavItem linkTo="/accessibility" title="Accessibility" />
      </ul>

      <Status />

      <Search />
    </div>
  );
};
