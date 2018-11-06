import React from 'react'

import styles from './explanation.module.sass'

import time from './time.svg'
import place from './place.svg'

export default ({
    headline,
    subheadline,
    where,
    when
}) =>
    <section className={styles.explanation}>

        <h2 className={styles.headline}>{headline}</h2>
        <p className={styles.description}>{subheadline}</p>

        <ul className={styles.timePlace}>
            <li className={styles.item}>
                <img alt="Time" className={styles.icon} src={time}/>
                <div>
                    <h4 className={styles.whereWhen}>When</h4>
                    <p className={styles.content}>{when}</p>
                </div>
            </li>
            <li className={styles.item}>
                <img alt="Venue" className={styles.icon} src={place}/>
                <div>
                    <h4 className={styles.whereWhen}>Where</h4>
                    <p className={styles.content}>{where}</p>
                </div>
            </li>
        </ul>
    </section>