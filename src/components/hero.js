import React from 'react'
import Button from './button'

import styles from './hero.module.sass'

export default ({headline, subheadline}) =>
    <section className={styles.hero}>
        <div className={styles.container}>
            <h1 className={styles.headline}>{headline}</h1>
            <p className={styles.description}>{subheadline}</p>
            <Button href="#register"/>
        </div>
    </section>