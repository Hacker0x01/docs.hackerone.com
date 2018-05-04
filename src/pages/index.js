import React from 'react'
import Topic from '../components/topic/topic'
import Footer from '../components/footer/footer'
import { withPrefix } from 'gatsby-link'

const IndexPage = () => {
  return (
    <div>
      <header className="hero">
        <div className="hero__wrapper">
          <h1>HackerOne Product Documentation</h1>
          <p>
            Welcome to HackerOne's Product Documentation Center! This is where you can get familiar with HackerOne and explore our product features.  
          </p>
          <p>
            We provide some tooltips here that you might find useful. This site is open to all and we welcome your feedback! 
          </p>
        </div>
      </header>

      <section className="homepage-content">
        <div className="homepage-content__wrapper">
          <div>
            <h1>Getting Started</h1>
            <p>
              Are you a hacker or do you run a program? Choose which book you'd like to
              browse.
            </p>
          </div>

          <div className="topics">
            <Topic url={withPrefix('/hackers.html')}>
              <h2>Hackers</h2>
              <p>
                Improve your hacker profile and learn how to submit
                vulnerabilities. 
              </p>
            </Topic>

            <Topic url={withPrefix('/programs.html')}>
              <h2>Programs</h2>
              <p>
                What you need to know about how our platform works and the
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
