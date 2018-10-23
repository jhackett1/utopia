import React from 'react'

import styles from './register.module.sass'

export default ({children}) =>
    <section className={styles.register}>
        <h2 className={styles.sectionTitle}>Register now</h2>
        <p className={styles.lede}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer leo urna, a sit amet feugiat nec, accumsan.</p>
        {children}
    </section>