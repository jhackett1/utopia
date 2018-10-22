import React from 'react'
import Button from './button'

import styles from './hero.module.sass'

export default () =>
    <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.twoThirds}>
                <h1 className={styles.headline}>Utopia is the next Fast Stream conference</h1>
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer leo urna, a sit amet feugiat nec, accumsan.</p>
                <Button/>
            </div>
        </div>
    </section>