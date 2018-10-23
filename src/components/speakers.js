import React from 'react'
import Speaker from './speaker'

import styles from './speakers.module.sass'

export default ({speakers}) =>
    <section className={styles.speakers}>
        <div className={styles.inner}>
            <h2 className={styles.sectionTitle}>Speakers</h2>
            <ul className={styles.list}>
                {speakers.map((speaker, i)=>
                    <li className={styles.item} key={i}>
                        <Speaker
                            avatarSrc={speaker.avatarSrc}
                            name={speaker.name}
                            role={speaker.role}
                            href={speaker.href}
                            />
                    </li>
                )}
                <li className={styles.moreSpeakers}>
                    <span className={styles.moreSpeakersNumber}>+15</span>
                    <p className={styles.moreSpeakersText}>More speakers from across the public and private sectors</p>
                </li>
            </ul>
        </div>
    </section>