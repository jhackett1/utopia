import React from 'react'
import Link from 'gatsby-link'

import styles from './button.module.sass'

export default ({href}) =>
    <Link className={styles.button} to={href}>Register now</Link>