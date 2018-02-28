import React from 'react'
import Navigation from './navigation'

const Header = () => (
  <div
    style={{
      background: '#585858',
      position: 'fixed',
      width: '100%',
      height: 60,
    }}
  >
    <div
      style={{
        padding: '16px 24px',
      }}
    >
      <Navigation />
    </div>
  </div>
)

export default Header
