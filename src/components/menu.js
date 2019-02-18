import React from 'react'
import Link from 'gatsby-link'
import { AppContext } from './Provider'

import styles from './menu.module.sass'

const MenuItem = ({
    href, 
    label
}) =>
    <li className={styles.item}>
        <Link 
            className={styles.link}
            activeClassName={styles.activeLink}
            to={href}
            >{label}</Link>
    </li>


const Menu = ({vertical}) =>
    <AppContext.Consumer>
        {(context)=>
            <ul className={(vertical)? styles.verticalMenu : styles.menu}>
                <MenuItem href="/speakers" label="Speakers"/>
                <MenuItem href="/blog" label="Blog"/>
                {(context.loggedIn)? 
                    <>

                         <li className={styles.item}>
                            <a
                                className={styles.link}
                                activeClassName={styles.activeLink}
                                href="https://civilservice.govintra.net/live-event/fset-webcast/"
                                >Videos</a>
                        </li>
                 
                        <MenuItem href="/schedule" label="Schedule"/>
                        <MenuItem href="/info" label="Info"/>
                    </>
                : 
                    <>
                        <MenuItem href="#register" label="Register"/>
                        <li className={styles.item}>
                            <button 
                                className={styles.link}
                                onClick={context.toggleModal}
                                >Log in</button>
                        </li>
                    </>
                }
            </ul>
        }
    </AppContext.Consumer>

export default Menu
