import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import Link from 'gatsby-link'
import slugify from 'slugify'
import vagueTime from 'vague-time'

import styles from './latest-posts.module.sass'

export const LatestPost = ({ post }) =>
    <li className={styles.postItem}>
        <Link className={styles.postLink} to={`/post/${slugify(post.node.frontmatter.title, {lower: true})}`}>
            <p className={styles.postDate}>{vagueTime.get({to: new Date(post.node.frontmatter.date)})}</p>
            <h3 className={styles.postTitle}>{post.node.frontmatter.title}</h3>
            <span className={styles.inlineLink}>Keep reading →</span>
        </Link>
    </li>

export default ({ posts }) =>
    <section className={styles.latestPosts}>
        <h2 className={styles.sectionTitle}>Blog</h2>
        <ul className={styles.postList}>
            {posts.map( (post, i) =>
                <ScrollAnimation animateIn="fadeInUp" className={styles.postItem} duration={0.5} animateOnce={true}  key={i}>
                    <LatestPost post={post}/>
                </ScrollAnimation>
            )}
        </ul>
    </section>