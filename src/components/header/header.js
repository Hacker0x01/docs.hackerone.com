import React from 'react'
import Navigation from '../navigation/navigation'

import styles from './header.module.css'

const Header = () => (
  <div className={styles.wrapper}>
    <Navigation />
  </div>
)

export default Header
