import React from 'react'
import Link from 'gatsby-link'
import slugify from 'slugify'
import vagueTime from 'vague-time'

import styles from './latest-posts.module.sass'

export default ({ post }) =>
    <li className={styles.postItem}>
        <Link className={styles.postLink} to={`/post/${slugify(post.node.frontmatter.title, {lower: true})}`}>
            <p className={styles.postDate}>{vagueTime.get({to: new Date(post.node.frontmatter.date)})}</p>
            <h3 className={styles.postTitle}>{post.node.frontmatter.title}</h3>
            <span className={styles.inlineLink}>Keep reading →</span>
        </Link>
    </li>