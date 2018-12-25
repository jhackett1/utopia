
import React from 'react'
import { graphql, navigate } from 'gatsby'
import Helmet from 'react-helmet'
import { checkLogin } from '../utils/localstorage'

import Layout from '../components/layout'
import PostHeader from '../components/post-header'
import Schedule from '../components/Schedule'

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
                    title={`Schedule | ${this.props.data.site.siteMetadata.title}`}
                    >
                </Helmet>
                <PostHeader
                    title="Schedule"
                    lede="The conference is divided into three themes, with several keynotes throughout the day."
                    />
                <Schedule
                    events={this.props.data.events.edges}
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
                    speaker
                    strand
                    venue
                    time
                    duration
                    slides
                    description
                    filmed
                }
            }
        }
    }

}
`