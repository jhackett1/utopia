import React from 'react'
import Link from 'gatsby-link'
import slugify from 'slugify'
import vagueTime from 'vague-time'

import styles from './latest-posts.module.sass'

export default ({ posts }) =>
    <section className={styles.latestPosts}>
        <h2 className={styles.sectionTitle}>Blog</h2>
        <ul className={styles.postList}>
            {posts.map( (post, i) =>
                <li className={styles.postItem} key={i}>
                    <Link className={styles.postLink} to={`/post/${slugify(post.node.frontmatter.title, {lower: true})}`}>
                        <h3 className={styles.postTitle}>{post.node.frontmatter.title}</h3>
                        <div className={styles.postMeta}>
                            <p className={styles.postDate}>{vagueTime.get({to: new Date(post.node.frontmatter.date)})}</p>
                            <span className={styles.inlineLink}>Keep reading →</span>
                        </div>
                    </Link>
                </li>
            )}
        </ul>
    </section>