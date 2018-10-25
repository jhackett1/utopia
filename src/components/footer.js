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
                <p>© Crown copyright, content available under the <a target="blank" href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">Open Government License.</a></p>
                <p>
                    Designed and developed by <a href="http://joshuahackett.com" target="blank">Joshua Hackett</a><br/>
                    <Link to="/privacy-notice">How we use your data</Link> 
                    <a href="/admin">Admin</a>
                </p>
            </aside>
        </div>
    </footer>