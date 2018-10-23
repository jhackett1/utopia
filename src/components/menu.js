import React from 'react'
import Link from 'gatsby-link'

import styles from './menu.module.sass'

const MenuItem = ({href, label}) =>
    <li className={styles.item}>
        <Link 
            className={styles.link} 
            activeClassName={styles.activeLink}
            to={href}
            >{label}</Link>
    </li>

const Menu = ({loggedIn}) =>
    <ul className={styles.menu}>
        <MenuItem href="/speakers" label="Speakers"/>
        <MenuItem href="/blog" label="Blog"/>
        {(loggedIn)? 
            <>
                <MenuItem href="/videos" label="Videos"/>
                <MenuItem href="/schedule" label="Schedule"/>
                <MenuItem href="/info" label="Info"/>
            </>
        : 
            <MenuItem href="#register" label="Register"/>
        }
    </ul>

export default Menu