import React from 'react'

import styles from './testimonial.module.sass'

export default () =>
    <section className={styles.testimonial}>
        <div className={styles.background}></div>
        <div className={styles.inner}>
            <blockquote className={styles.blockquote}>
                <p className={styles.blockquoteText}>
                    "Meet like minded people in a creative environment and get inspired by industry leaders. You won’t be disappointed"
                </p>
            </blockquote>
            <cite className={styles.citation}>Fiona Harris, organiser</cite>
        </div>
    </section>