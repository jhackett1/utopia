import React from 'react'

import styles from './explanation.module.sass'

import time from './time.svg'
import place from './place.svg'

export default () =>
    <section className={styles.explanation}>

        <h2 className={styles.headline}>Civil servants face an unprecedented political context</h2>
        <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer leo urna, a sit amet feugiat nec, accumsan.</p>

        <ul className={styles.timePlace}>
            <li className={styles.item}>
                <img alt="Time" className={styles.icon} src={time}/>
                <div>
                    <h4 className={styles.whereWhen}>When</h4>
                    <p className={styles.content}>21-22nd February 2019</p>
                </div>
            </li>
            <li className={styles.item}>
                <img alt="Venue" className={styles.icon} src={place}/>
                <div>
                    <h4 className={styles.whereWhen}>Where</h4>
                    <p className={styles.content}>Victoria St, Westminster</p>
                </div>
            </li>
        </ul>
    </section>