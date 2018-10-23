import React from 'react'

import styles from './testimonial.module.sass'

export default () =>
    <section className={styles.testimonial}>
        <div className={styles.background}></div>
        <div className={styles.inner}>
            <blockquote className={styles.blockquote}>
                <p className={styles.blockquoteText}>
                “Meet like minded people in a creative environment and get inspired by industry leaders. You won’t be disappointed”
                </p>
            </blockquote>
            <cite className={styles.citation}>
                <p className={styles.name}>Greg Hobbs</p>
                <p className={styles.role}>Senior civil service sponsor</p>
            </cite>
        </div>
    </section>