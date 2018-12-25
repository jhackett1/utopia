
import React from 'react'
import { graphql, navigate } from 'gatsby'
import Helmet from 'react-helmet'
import { checkLogin } from '../utils/localstorage'

import Layout from '../components/layout'
import PostHeader from '../components/post-header'

import styles from './videos.module.sass'

export default class extends React.Component{
    componentDidMount(){
        if (!checkLogin()) {
            // If we’re not logged in, redirect to the home page.
            navigate(`/`)
            return null
        }
    }
    render(){
        return(
            <Layout>
                    <Helmet
                        title={`Videos | ${this.props.data.site.siteMetadata.title}`}
                        >
                    </Helmet>
                    <PostHeader
                        title="Videos"
                        lede="We're filming some key talks at the event. Watch them live or afterward here."
                        />
                    <ul className={styles.videoList}>

                        {this.props.data.videos.edges.map((video, i)=>
                            <li className={styles.videoItem} key={i}>
                                <div className={styles.videoContainer}  dangerouslySetInnerHTML={{ __html: video.node.frontmatter.url }}></div>
                                <h2 className={styles.videoTitle}>{video.node.frontmatter.title}</h2>
                            </li>
                        )}
                    </ul>
            </Layout>
        )
    }
}

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