import React from 'react'
import styles from './testimonial.module.sass'

export default ({
    testimonial,
    citationName,
    citationRole
}) =>
    <section className={styles.testimonial}>
        <div className={styles.background}></div>
        <div className={styles.inner}>
            <blockquote className={styles.blockquote}>
                <p className={styles.blockquoteText}>
                    “{testimonial}”
                </p>
            </blockquote>
            <cite className={styles.citation}>
                <p className={styles.name}>{citationName}</p>
                <p className={styles.role}>{citationRole}</p>
            </cite>
        </div>
    </section>