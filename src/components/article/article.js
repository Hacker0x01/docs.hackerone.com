import React from 'react'
import { Link, withPrefix } from 'gatsby-link'

import Sidebar from '../../components/sidebar/sidebar'
import ArticleSelect from '../../components/article_select/article_select'
import './article.scss'

const findActiveSectionByPath = (pathname, sections) => {
  let match
  let activeSection

  sections.forEach(section => {
    const match = section.items.some(
      item =>
        pathname === withPrefix(item.path) ||
        (item.items &&
          item.items.some(subitem => pathname === withPrefix(subitem.path)))
    )

    if (match) {
      activeSection = section
    }
  })

  return activeSection
}

const findActiveChildByPath = (pathname, sections) => {
  let match
  let activeChild

  sections.forEach(section => {
    section.items.some(item => {
      if (item.items) {
        match =
          item.items.some(subitem => {
            return pathname === withPrefix(subitem.path)
          }) || pathname === withPrefix(item.path)

        if (match) {
          activeChild = item.items
        }
      }
    })
  })

  return activeChild
}

class IndexRoute extends React.Component {
  render() {
    const { links } = this.props
    const githubRepo =
      'https://github.com/hacker0x01/docs.hackerone.com/blob/master/docs'

    const globalWindow =
      typeof window !== 'undefined' ? window.location.pathname : '/'

    return (
      <div className="article">
        <Sidebar
          activeSection={findActiveSectionByPath(globalWindow, links)}
          activeChild={findActiveChildByPath(globalWindow, links)}
          links={links}
        />

        <article className="article__inner">
          <ArticleSelect links={links} currentPath={globalWindow} />

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
