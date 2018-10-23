import React from 'react'
import Link from 'gatsby-link'
import Menu from './menu.js'
import Social from './social.js'

import styles from './footer.module.sass'

export default () =>
    <footer className={styles.footer}>
        <div className={styles.inner}>
            <aside className={styles.menus}>
                <Menu/>
                <Social/>
            </aside>
            <aside className={styles.info}>
                <p>© Utopia 2019, all rights reserved</p>
                <p>Designed and developed by <a href="http://joshuahackett.com" target="blank">Joshua Hackett</a> <br/><Link to="#">Privacy notice</Link></p>
            </aside>
        </div>
    </footer>