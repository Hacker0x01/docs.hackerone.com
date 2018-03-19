import React from 'react'
import styles from './topic.module.css'

const Topic = (props) => {
  return <a
    href={props.url}
    className={styles.wrapper}>
    {props.children}
  </a>
}

export default Topic
