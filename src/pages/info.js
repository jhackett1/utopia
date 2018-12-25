
import React from 'react'
import { graphql, navigate } from 'gatsby'
import Helmet from 'react-helmet'
import { checkLogin } from '../utils/localstorage'

import Layout from '../components/layout'
import PostHeader from '../components/post-header'

import styles from './info.module.sass'



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
                    title={`Info | ${this.props.data.site.siteMetadata.title}`}
                    >
                </Helmet>
                <PostHeader
                    title="Info"
                    lede="Everything you need to know about the event and the venue."
                    />
                <ul className={styles.infoList}>
                    {this.props.data.infos.edges.map((info, i)=>
                        <li className={styles.infoItem} key={i}>
                            <h2 className={styles.infoTitle}>{info.node.frontmatter.title}</h2>
                            <div className={styles.infoContent} dangerouslySetInnerHTML={{ __html: info.node.html }}></div>
                        </li>
                    )}
                </ul>
            </Layout>
        )
    }
}

export const pageQuery = graphql`
query indexQuery {

    site {
        siteMetadata {
            title
        }
    }

    infos: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/info/.*$/"}},
        sort: { order: ASC, fields: [frontmatter___order] }
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