
import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import PostHeader from '../components/post-header'
import Schedule from '../components/Schedule'

const SchedulePage = ({ data }) => (
  <Layout>
        <Helmet
            title={`Schedule | ${data.site.siteMetadata.title}`}
            >
        </Helmet>
        <PostHeader
            title="Schedule"
            lede="The conference is divided into three themes, with several keynotes throughout the day."
            />
        <Schedule
            events={data.events.edges}
            />


  </Layout>
)

export default SchedulePage

export const pageQuery = graphql`
query scheduleQuery {

    site {
        siteMetadata {
            title
        }
    }

    events: allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/events/.*$/"}},
        sort: { order: ASC, fields: [frontmatter___time] }
    ) {
        edges {
            node {
                frontmatter {
                    title
                    speaker
                    strand
                    venue
                    time
                    duration
                    slides
                    description
                }
            }
        }
    }

}
`