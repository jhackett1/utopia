import React from 'react'

import styles from './register.module.sass'

export default ({info, children}) =>
    <section id="register" className={styles.register}>
        <h2 className={styles.sectionTitle}>Register now</h2>
        <p className={styles.lede}>{info}</p>
        {children}
    </section>