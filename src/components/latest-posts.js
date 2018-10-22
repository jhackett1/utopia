import React from 'react'
import Link from 'gatsby-link'

import styles from './latest-posts.module.sass'

export default ({posts}) =>
    <section className={styles.latestPosts}>
        <div className={styles.inner}>
            <h2 className={styles.sectionTitle}>Blog</h2>
            <ul className={styles.postList}>
                {posts.map( post =>
                    <li className={styles.postItem}>
                        <h3 className={styles.postTitle}>{post.title}</h3>
                        <div className={styles.postMeta}>
                            <p className={styles.postDate}>3 days ago</p>
                            <Link className={styles.postLink} to={post.href}>Keep reading →</Link>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    </section>