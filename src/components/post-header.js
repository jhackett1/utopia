import React from 'react'

import styles from './post-header.module.sass'

export default ({
    title,
    time
}) =>
    <section className={styles.postHeader}>
        {(time)? <p className={styles.time}>{time}</p> : ""}
        <h1 className={styles.title}>{title}</h1>
    </section>