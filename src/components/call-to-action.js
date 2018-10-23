import React from 'react'
import Button from './button.js'
import styles from './call-to-action.module.sass'

export default () =>
    <section className={styles.callToAction}>
        <div className={styles.inner}>
            <h2 className={styles.headline}>Lorem ipsum dolor sit amet</h2>
            <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer leo urna, a sit amet feugiat nec, accumsan.</p>
            <Button href="/#register"/>
        </div>
    </section>