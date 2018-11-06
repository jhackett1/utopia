import React from 'react'
import { graphql } from "gatsby"
import Helmet from 'react-helmet'

import Layout from '../components/layout/Layout'
import PostHeader from '../components/post-header/PostHeader'
import EventsTable from '../components/events-table/EventsTable'

export default class SchedulePage extends React.Component{
    render(){
        let data = this.props.data
        return(
            <Layout>
                <Helmet
                    title={`Schedule | ${data.site.siteMetadata.title}`}
                    >
                </Helmet>
                <PostHeader
                    title="Schedule"
                    lede="Utopia is divided into three strands, with several key talks throughout the day."
                    />
                <EventsTable
                    events={data.events}
                    />
            </Layout>
        )
    }
}

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
                time
                duration
                venue
            }
        }
        }
    }
  }
`