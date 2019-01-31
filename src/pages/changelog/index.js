import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import slugify from 'slugify'
import GatsbyConfig from '../../../gatsby-config'
import classNames from "classnames";

import './changelog.scss'

const Section = props => {
  const titleClasses = classNames('sidebar__title', {
    'sidebar__title--active': props.isSectionActive,
  })

  const itemsClasses = classNames('sidebar__items', {
    'sidebar__items--active': props.isSectionActive,
  })

  return (
    <div className="sidebar__section">
      <h3 className={titleClasses} onClick={props.onSectionTitleClick}>
        {props.title}
        <div className="sidebar__toggler">
          {props.isSectionActive ? "+" : "-"}
        </div>
      </h3>
      <ul className={itemsClasses}>
        {props.items.map((item, index) => (
          <li className="sidebar__item" key={index}>
            <a className="sidebar__link" href={`#${slugify(item.node.frontmatter.path)}`}>
              {item.node.frontmatter.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

class IndexRoute extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      activeSection: new Date().getFullYear().toString(),
    }
  }

  toggleSection(year) {
    return (event, state) => {
      event.preventDefault()

      this.setState({
        activeSection: this.state.activeSection === year ? null : year,
      })
    }
  }

  groupedByYear() {
    const { edges } = this.props.data.allMarkdownRemark

    const groupedByYear = {};

    edges.map((item, index) => {
      const year = item.node.frontmatter.date.substring(0, 4);

      if (groupedByYear[year] == undefined) {
        groupedByYear[year] = [];
      }

      groupedByYear[year].push(item);
    });

    return groupedByYear;
  }

  render() {
    return (
      <div className="changelog article">
        <Helmet title={`Changelog | ${GatsbyConfig.siteMetadata.title}`} />
        <div className="sidebar">
          <div className="sidebar__wrapper">
            <div className="sidebar__body">
            {Object.keys(this.groupedByYear()).reverse().map((year, index) => (
              <Section
                key={index}
                items={this.groupedByYear()[year]}
                title={year}
                onSectionTitleClick={this.toggleSection(year)}
                isSectionActive={this.state.activeSection === year}
              />
            ))}
            </div>
          </div>
        </div>

        <div className="article__inner">
          <h1>Changelog</h1>
          <p>
            See what's changed or new in HackerOne.
          </p>
          {this.props.data.allMarkdownRemark.edges.map((item, index) => {
            return (
              <div className="changelog__wrapper" key={index}>
                <div
                  className="changelog__anchor"
                  id={slugify(item.node.frontmatter.path)}
                />
                <h2>{item.node.frontmatter.title}  {item.node.frontmatter.date.substring(0, 4)}</h2>
                <div dangerouslySetInnerHTML={{ __html: item.node.html }} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default IndexRoute

export const pageQuery = graphql`
  query changelogIndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "/changelog/" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          html
          frontmatter {
            path
            title
            date
          }
        }
      }
    }
  }
`
