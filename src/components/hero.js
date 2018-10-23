import React from 'react'
import Button from './button'

import styles from './hero.module.sass'

export default () =>
    <section className={styles.hero}>
        <div className={styles.container}>
            <h1 className={styles.headline}>Utopia is the next Fast Stream conference</h1>
            <p className={styles.description}>The Civil Service faces a world of disruptive technology, changing working practices and an unprecedented political context. </p>
            <Button href="#register"/>
        </div>
    </section>