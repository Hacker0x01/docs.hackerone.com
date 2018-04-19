import React from 'react'
import Topic from '../components/topic/topic'
import Footer from '../components/footer/footer'
import { withPrefix } from 'gatsby-link'

const IndexPage = () => {
  return (
    <div>
      <header className="hero">
        <div className="hero__wrapper">
          <h1>Welcome to HackerOne's Product Documentation Center</h1>
          <p>
            Get familiar with HackerOne and explore our product features. We 
            provide some tooltips here that you might find useful. 
          </p>
        </div>
      </header>

      <section className="homepage-content">
        <div className="homepage-content__wrapper">
          <div>
            <h1>Getting Started</h1>
            <p>
              Are you a hacker or a program? Choose which book you'd like to browse. 
            </p>
          </div>

          <div className="topics">
            <Topic url={withPrefix("/hackers")}>
              <h2>Hackers</h2>
              <p>
                COMING SOON! A complete toolkit designed for hackers to answer any questions
                about our platform.
              </p>
            </Topic>

            <Topic url={withPrefix("/programs")}>
              <h2>Programs</h2>
              <p>
                Anything you need to know about how our platform works and the
                services we offer.
              </p>
            </Topic>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default IndexPage
