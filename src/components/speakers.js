import React from 'react'
import Speaker from './speaker'
import ScrollAnimation from 'react-animate-on-scroll'

import styles from './speakers.module.sass'

export default ({speakers}) =>
    <section className={styles.speakers}>
        <div className={styles.inner}>
            <h2 className={styles.sectionTitle}>Speakers</h2>
            <ul className={styles.list}>
                {speakers.map((speaker, i)=>
                    <li className={styles.item} key={i}>
                        <ScrollAnimation animateIn="fadeInUp" duration={0.5} animateOnce={true}>
                            <Speaker
                                avatarSrc={speaker.node.frontmatter.image}
                                name={speaker.node.frontmatter.title}
                                role={speaker.node.frontmatter.role}
                                href="/speakers"
                                />
                        </ScrollAnimation>

                    </li>
                )}
                <li className={styles.moreSpeakers}>
                    <span className={styles.moreSpeakersNumber}>+15</span>
                    <p className={styles.moreSpeakersText}>More speakers from across the public and private sectors</p>
                </li>
            </ul>
        </div>
    </section>