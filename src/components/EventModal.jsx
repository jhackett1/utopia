import React from 'react'
import Link from 'gatsby-link'
import styles from './schedule.module.sass'

export default ({event, closeModal})=>
    <>
        <div className={styles.overlay} onClick={closeModal}></div>
        <div className={styles.modalHolder}>
            <article className={styles.modal}>
                <div className={styles.eventModalHeader}>
                    <h2 className={styles.eventTitleBig}>{event.title}</h2>
                    <p className={styles.eventInfo}>{event.duration} mins / {event.venue}</p>
                    <span className={styles.strandLabel}>{event.strand}</span>
                </div>
                <p className={styles.eventDescription}>{event.description}</p>
                <a className={styles.button} target="blank" href={event.slides}>Download slides</a>
                <Link className={styles.buttonOutline} to="/videos">Go to videos</Link>
            </article>
        </div>
    </>