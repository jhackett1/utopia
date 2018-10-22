import React from 'react'

import styles from './time-place.module.sass'

import time from './time.svg'
import place from './place.svg'

export default () =>
    <section className={styles.timePlace}>
        <ul className={styles.inner}>
            <li className={styles.item}>
                <img className={styles.icon} src={time}/>
                <div>
                    <h4 className={styles.heading}>When</h4>
                    <p className={styles.content}>21-22nd February 2019</p>
                </div>
            </li>
            <li className={styles.item}>
                <img className={styles.icon} src={place}/>
                <div>
                    <h4 className={styles.heading}>Where</h4>
                    <p className={styles.content}>Victoria St, Westminster</p>
                </div>
            </li>
        </ul>
    </section>