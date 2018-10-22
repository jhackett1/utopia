import React from 'react'

import styles from './venue.module.sass'

export default () =>
    <section className={styles.venue}>
        <aside className={styles.venueText}>
            <h2 className={styles.sectionTitle}>Venue</h2>
            <h3 className={styles.address}>1 Victoria St, London SW1E 5ND</h3>
            <p className={styles.venueDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget turpis enim. Lorem ipsum dolor sit amet.</p>
        </aside>
        <aside className={styles.mapHolder}>
            <iframe 
                className={styles.map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2242.8335482022035!2d-0.13401927062351002!3d51.49820621723955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x54b076a3c28f36c9!2sBEIS+Conference+Center!5e0!3m2!1sen!2suk!4v1540165753247" 
                frameborder="0" 
                allowfullscreen
                ></iframe>
        </aside>
    </section>