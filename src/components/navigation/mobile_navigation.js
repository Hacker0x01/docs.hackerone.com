import classNames from "classnames";
import React from "react";
import Link from "gatsby-link";
import Search from "../search/search";
import Status from "../status/status";
import logo from "./logo.svg";
import hamburgerIcon from "./menu.svg";
import clearIcon from "./clear.svg";

import "./mobile-navigation.scss";

const MobileNavigationMenu = handleClick => {
  return (
    <div>
      <div className="mobile-navigation__separator" />

      <ul className="mobile-navigation__list">
        <NavItem
          linkTo="/hackers.html"
          title="Hackers"
          handleClick={handleClick}
        />
        <NavItem
          linkTo="/programs.html"
          title="Programs"
          handleClick={handleClick}
        />
        <NavItem
          linkTo="/glossary"
          title="Glossary"
          handleClick={handleClick}
        />
        <li className="mobile-navigation__item">
          <a
            className="mobile-navigation__link"
            href="https://api.hackerone.com"
            target="_blank"
          >
            API
          </a>
        </li>
        <NavItem
          linkTo="/changelog"
          title="Changelog"
          handleClick={handleClick}
        />
        <NavItem
          linkTo="/accessibility"
          title="Accessibility"
          handleClick={handleClick}
        />
      </ul>

      <div className="mobile-navigation__separator" />

      <Status />
      <Search />
    </div>
  );
};

const NavItem = ({ linkTo, title, handleClick }) => {
  const linkProps = to => ({ location }) => {
    return {
      className: classNames("navigation__link", {
        "navigation__link--active": location.pathname.includes(to)
      })
    };
  };

  return (
    <li className="mobile-navigation__item">
      <Link
        to={linkTo}
        onClick={handleClick}
        getProps={linkProps(`/${title.toLowerCase()}`)}
      >
        {title}
      </Link>
    </li>
  );
};

class MobileNavigation extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isMenuVisible: false
    };
  }

  handleClick() {
    return () => {
      if (this.state.isMenuVisible) {
        document.body.style.overflowY = "auto";
      } else {
        document.body.style.overflowY = "hidden";
      }

      this.setState({ isMenuVisible: !this.state.isMenuVisible });
    };
  }

  render() {
    const classes = classNames("mobile-navigation__wrapper", {
      "mobile-navigation__wrapper--active": this.state.isMenuVisible
    });

    return (
      <div role="navigation" className={classes}>
        <img src={logo} className="mobile-navigation__logo" alt="" />

        <img
          src={this.state.isMenuVisible ? clearIcon : hamburgerIcon}
          className="mobile-navigation__menu"
          alt=""
          onClick={this.handleClick()}
        />

        {this.state.isMenuVisible && (
          <MobileNavigationMenu handleClick={this.handleClick()} />
        )}
      </div>
    );
  }
}

export default MobileNavigation;
