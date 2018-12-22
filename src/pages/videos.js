
import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import PostHeader from '../components/post-header'

import styles from './videos.module.sass'

const VideoPage = ({ data }) => (
  <Layout>
        <Helmet
            title={`Videos | ${data.site.siteMetadata.title}`}
            >
        </Helmet>
        <PostHeader
            title="Videos"
            lede="Live streams and recordings of the event."
            />
        <ul className={styles.videoList}>

            {data.videos.edges.map((video, i)=>
                <li className={styles.videoItem} key={i}>
                    <div className={styles.videoContainer}  dangerouslySetInnerHTML={{ __html: video.node.frontmatter.url }}></div>
                    <h2 className={styles.videoTitle}>{video.node.frontmatter.title}</h2>
                </li>
            )}

        </ul>

  </Layout>
)

export default VideoPage

export const pageQuery = graphql`
query videoQuery {

    site {
        siteMetadata {
            title
        }
    }

    videos: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/videos/.*$/"}},
        sort: { order: ASC, fields: [frontmatter___order] }
    ) {
        edges {
            node {
            frontmatter {
                title
                order
                url
            }
            }
        }
    }

}
`