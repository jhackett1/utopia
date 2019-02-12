import React from 'react'

import styles from './venue.module.sass'

export default ({
    address,
    info
}) =>
    <section className={styles.venue}>
        <aside className={styles.venueText}>
            <h2 className={styles.sectionTitle}>Venue</h2>
            <h3 className={styles.address}>{address}</h3>
            <p className={styles.venueDescription}>{info}</p>
            <a className={styles.inlineLink} target="blank" href="https://www.google.com/maps/place/County+Hall,+Belvedere+Rd,+South+Bank,+London+SE1+7GP/@51.5019633,-0.1210409,17z/data=!3m1!4b1!4m5!3m4!1s0x487604c79f5bbd7d:0xfc723b40150d9848!8m2!3d51.5019633!4d-0.1188522">Get directions →</a>
        </aside>
        <aside className={styles.mapHolder}>
            <iframe 
                title="venue-map"
                className={styles.map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.613307072854!2d-0.12104088423022866!3d51.50196327963426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c79f5bbd7d%3A0xfc723b40150d9848!2sCounty+Hall%2C+Belvedere+Rd%2C+South+Bank%2C+London+SE1+7GP!5e0!3m2!1sen!2suk!4v1549967843162" 
                ></iframe>
        </aside>
    </section>
