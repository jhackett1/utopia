import React from 'react'
import { graphql } from "gatsby"
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import PostHeader from '../components/post-header'
import LatestPost from '../components/latest-post'

import styles from './blog.module.sass'

const BlogPage = ({ data }) => {
  return(
    <Layout>
        <Helmet
            title={`Blog | ${data.site.siteMetadata.title}`}
            >
        </Helmet>
        <PostHeader
            title="Blog"
            lede={data.blogPage.frontmatter.lede}
            />
            <ul className={styles.latestPosts}>
                {data.posts.edges.map( (post, i) =>
                    <LatestPost post={post} key={i}/>
                )}
            </ul>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query blogQuery {
    site {
        siteMetadata {
            title
        }
    }
    blogPage: markdownRemark(frontmatter: {title: {eq: "blog"}}) {
      frontmatter {
        lede
      }
    }
    posts: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/posts/.*$/"}},
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            frontmatter {
              date
              title
            }
          }
        }
      }
  }
`