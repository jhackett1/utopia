
import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import PostHeader from '../components/post-header'

import styles from './info.module.sass'

const InfoPage = ({ data }) => (
  <Layout>
        <Helmet
            title={`Info | ${data.site.siteMetadata.title}`}
            >
        </Helmet>
        <PostHeader
            title="Info"
            lede="Everything you need to know about the event and the venue."
            />
        <ul className={styles.infoList}>
            {data.infos.edges.map(info=>
                <li className={styles.infoItem}>
                    <h2 className={styles.infoTitle}>{info.node.frontmatter.title}</h2>
                    <div className={styles.infoContent} dangerouslySetInnerHTML={{ __html: info.node.html }}></div>
                </li>
            )}
        </ul>

  </Layout>
)

export default InfoPage

export const pageQuery = graphql`
query indexQuery {

    site {
        siteMetadata {
            title
        }
    }

    infos: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/info/.*$/"}},
        sort: { order: ASC, fields: [frontmatter___order] },
        limit: 5
    ) {
        edges {
            node {
            frontmatter {
                title
                order
            }
            html
            }
        }
    }

}
`