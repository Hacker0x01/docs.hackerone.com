import React from 'react'
import Topic from '../components/topic/topic'
import Footer from '../components/footer/footer'

const IndexPage = () => {
  return (
    <div>
      <header className="hero">
        <div className="hero__wrapper">
          <h1>Welcome to HackerOne's Product Documentation Center</h1>
          <p>
            You'll find comprehensive guides and documentation to help you start
            working with HackerOne as quickly as possible.
          </p>
        </div>
      </header>

      <section className="homepage-content">
        <div className="homepage-content__wrapper">
          <div>
            <h1>Getting started</h1>
            <p>
              We can help make your workflow faster and eaier. Here are some
              tooltips that you might find useful.
            </p>
          </div>

          <div className="topics">
            <Topic url="/hackers">
              <h2>Hackers</h2>
              <p>
                A complete toolkit designed for hackers to answer any questions
                about our platform.
              </p>
            </Topic>

            <Topic url="/programs">
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
