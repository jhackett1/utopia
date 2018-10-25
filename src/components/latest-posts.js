import React from 'react'

import LatestPost from './latest-post'

import styles from './latest-posts.module.sass'

export default ({ posts }) =>
    <section className={styles.latestPosts}>
        <h2 className={styles.sectionTitle}>Blog</h2>
        <ul className={styles.postList}>
            {posts.map( (post, i) =>
                <LatestPost post={post} key={i}/>
            )}
        </ul>
    </section>