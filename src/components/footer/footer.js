import React from 'react'
import Navigation from '../navigation/navigation'

import './footer.scss'

const Footer = () => (
  <div className="footer">
    <div className="footer__inner">
      We're always happy to help. Feel free to{' '}
      <a href="mailto:support@hackerone.com">contact support</a>,{' '}
      <a href="mailto:sales@hackerone.com">connect with our sales team</a>, or{' '}
      <a href="https://hackerone.com" target="_blank">
        checkout our website
      </a>.
    </div>
  </div>
)

export default Footer
