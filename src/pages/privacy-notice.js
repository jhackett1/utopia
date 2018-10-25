import React from 'react'
import { graphql } from "gatsby"
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
          title="How we use your data"
          />
      <PostContent content={html}/>
      <CallToAction/>
    </Layout>
  )
}

export default PostPage

export const pageQuery = graphql`
  query PrivacyNotice {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: {title: {eq: "privacy-notice"}}) {
        html
        frontmatter {
            title
        }
    }
  }
`