import React from 'react'
import { graphql } from "gatsby"
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import PostHeader from '../components/post-header'
import Speakers from '../components/speakers'

const SpeakersPage = ({ data }) => {
  return(
    <Layout>
      <Helmet
          title={`Speakers | ${data.site.siteMetadata.title}`}
        >
      </Helmet>
      <PostHeader
          title="Speakers"
          />
      <Speakers speakers={data.speakers.edges}/>
    </Layout>
  )
}

export default SpeakersPage

export const pageQuery = graphql`
  query speakersQuery {
    site {
        siteMetadata {
            title
        }
    }
    speakers: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/speakers/.*$/"}},
      sort: { order: DESC, fields: [frontmatter___order] }
    ) {
      edges {
        node {
          frontmatter {
            title
            role
            image
            order
          }
        }
      }
    }
  }
`