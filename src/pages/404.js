import React from 'react'
import { graphql } from "gatsby"
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import PostHeader from '../components/post-header'
import PostContent from '../components/post-content'

const NotFoundPage = ({ data }) => {
  return(
    <Layout>
      <Helmet
          title={`Not found | ${data.site.siteMetadata.title}`}
        >
      </Helmet>
      <PostHeader
          title="Page not found"
          />
      <PostContent content="We can't find the page you're looking for."/>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query notFoundQuery {
    site {
        siteMetadata {
            title
        }
    }
  }
`