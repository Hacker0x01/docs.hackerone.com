import React from "react";
import Link from "gatsby-link";
import classNames from "classnames";
import "./sidebar.scss";

const Section = props => {
  const titleClasses = classNames("sidebar__title", {
    "sidebar__title--active": props.isSectionActive
  });

  return (
    <div className="sidebar__section">
      <h3 className={titleClasses} onClick={props.onSectionTitleClick}>
        {props.title}
      </h3>
      <SectionLinks {...props} title={props.title} />
    </div>
  );
};

const SectionLinks = props => {
  const classes = classNames("sidebar__items", {
    "sidebar__items--active": props.isSectionActive
  });

  return (
    <ul className={classes}>
      {props.items.map((item, index) => (
        <SectionLink
          node={item}
          children={item.items}
          key={index}
          isChildActive={props.activeChild === item.items}
        />
      ))}
    </ul>
  );
};

const SectionLink = props => {
  let childnodes = null;
  if (props.children) {
    childnodes = props.children.map((childnode, index) => (
      <SectionLink key={index} node={childnode} children={childnode.items} />
    ));
  }

  const item = props.node;

  const subItemsClasses = classNames("sidebar__sub-items", {
    "sidebar__sub-items--active": props.isChildActive
  });

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
      {childnodes ? <ul className={subItemsClasses}>{childnodes}</ul> : null}
    </li>
  );
};

class Sidebar extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      activeSection: props.activeSection,
      activeChild: props.activeChild
    };
  }

  toggleSection(section) {
    return (event, state) => {
      event.preventDefault();

      this.setState({
        activeSection: this.state.activeSection === section ? null : section
      });
    };
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__wrapper">
          <div className="sidebar__body">
            {this.props.links.map((section, index) => (
              <Section
                key={index}
                {...section}
                title={section.title}
                onSectionTitleClick={this.toggleSection(section)}
                isSectionActive={this.state.activeSection === section}
                activeChild={this.state.activeChild}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
