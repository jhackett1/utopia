import React from 'react'
import Link from 'gatsby-link'

import styles from './speaker.module.sass'

export default ({
    avatarSrc,
    name,
    role,
    href
}) =>
    <Link className={styles.link} to={href}>
        <img className={styles.avatar} src={avatarSrc} alt={`${name}'s avatar`}/>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.role}>{role}</p>
    </Link>