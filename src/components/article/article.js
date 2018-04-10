import React from 'react'
import Link from 'gatsby-link'
import slugify from "slugify"

import Sidebar from '../../components/sidebar/sidebar'
import './article.scss'

const removePrefix = (path) => {
  return path.split('/').slice(-1)[0];
}

const findSectionByPath = (pathname, sections) => {
  let match;
  let activeSection;
  const slugId = removePrefix(pathname);

  sections.forEach(section => {
    const match = section.items.some(
      item =>
        removePrefix(pathname) === removePrefix(item.path) ||
        (item.items &&
          item.items.some(subitem => slugId === removePrefix(subitem.path)))
    );

    if (match) {
      activeSection = section;
    }
  });

  return activeSection;
};

class IndexRoute extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: window.location.pathname,
    }
  }

  render() {
    const { links } = this.props;
    const githubRepo =
      'https://github.com/hacker0x01/docs.hackerone.com/blob/master/docs'

    const windowGlobal = typeof window !== 'undefined' && window;

    return (
      <div className="article">
        <Sidebar
          defaultActiveSection={findSectionByPath(windowGlobal.location.pathname, links)}
          links={links} />
        <article className="article__inner">
          {this.props.children}

          {this.props.docOnGithub ? (
            <div className="footer__inner">
              <a href={githubRepo + this.props.docOnGithub}>
                Edit this page on GitHub
              </a>
            </div>
          ) : null}
        </article>
      </div>
    )
  }
}

export default IndexRoute
