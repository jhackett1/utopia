import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import LatestPost from './latest-post'

import styles from './latest-posts.module.sass'

export default ({ posts }) =>
    <section className={styles.latestPosts}>
        <h2 className={styles.sectionTitle}>Blog</h2>
        <ul className={styles.postList}>
            {posts.map( (post, i) =>
                <ScrollAnimation animateIn="fadeInUp" duration={0.5} animateOnce={true}  key={i}>
                    <LatestPost post={post}/>
                </ScrollAnimation>
            )}
        </ul>
    </section>