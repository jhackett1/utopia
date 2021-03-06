import React from 'react'
import { graphql } from "gatsby"
import vagueTime from 'vague-time'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import PostHeader from '../components/post-header'
import PostContent from '../components/post-content'
import CallToAction from '../components/call-to-action'

const PostPage = ({ data }) => {

  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return(
    <Layout>
      <Helmet
          title={`${frontmatter.title} | ${data.site.siteMetadata.title}`}
        >
      </Helmet>
      <PostHeader
          title={frontmatter.title}
          time={vagueTime.get({to: new Date(frontmatter.date)})}
          />
      <PostContent content={html}/>
      <CallToAction/>
    </Layout>
  )
}

export default PostPage

export const pageQuery = graphql`
  query PostById($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark( id: { eq: $id } ) {
      html
      id
      frontmatter {
        date
        title
      }
    }
  }
`