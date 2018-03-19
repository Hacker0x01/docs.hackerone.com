import React from 'react'
import Navigation from '../navigation/navigation'

import styles from './footer.module.css'

const Footer = () => (
  <div className={styles.wrapper}>
    <div className={styles.inner}>
      We're always happy to help. Feel free to <a>contact support</a>, <a>connect with our sales team</a>, or <a>checkout our website</a>.
    </div>
  </div>
)

export default Footer
