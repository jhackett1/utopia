import React from 'react'
import { graphql } from "gatsby"
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import PostHeader from '../components/post-header'
import LatestPosts from '../components/latest-posts'

const BlogPage = ({ data }) => {
  return(
    <Layout>
        <Helmet
            title={`Blog | ${data.site.siteMetadata.title}`}
            >
        </Helmet>
        <PostHeader
            title="Blog"
            />
        <LatestPosts
            posts={data.posts.edges}
            />
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