import React from 'react'
import Link from 'gatsby-link'

import logo from './logo.svg'
import Menu from './menu'

import styles from './header.module.sass'

export default () =>
    <header className={styles.header}>
        <Link to="/">
            <img className={styles.logo} src={logo} alt="Utopia logo"/>
        </Link>
        <nav className={styles.nav}>
            <Menu/>
        </nav>
    </header>

