import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Button from '../button/Button.js'
import styles from './call-to-action.module.sass'

export default () =>
    <StaticQuery
        query={graphql`
        query CallToActionQuery {
            markdownRemark(frontmatter: {title: {eq: "index"}}) {
                frontmatter {
                    registerInfo
                }
            }
        }
    `}
    render={data => (
        <section className={styles.callToAction}>
            <div className={styles.inner}>
                <h2 className={styles.headline}>Claim your place now</h2>
                <p className={styles.description}>{data.markdownRemark.frontmatter.registerInfo}</p>
                <Button href="/#register"/>
            </div>
        </section>
    )}
    />