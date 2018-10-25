
import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Explanation from '../components/explanation'
import Speakers from '../components/speakers'
import Testimonial from '../components/testimonial'
import LatestPosts from '../components/latest-posts'
import Venue from '../components/venue'
import Register from '../components/register'

const IndexPage = ({ data }) => (
  <Layout>
    <Hero
      headline={data.homepage.frontmatter.headline}
      subheadline={data.homepage.frontmatter.subheadline}
      />
    <Explanation
      headline={data.homepage.frontmatter.explanationHeadline}
      subheadline={data.homepage.frontmatter.explanationSubheadline}
      when={data.homepage.frontmatter.when}
      where={data.homepage.frontmatter.where}
      />
    <Speakers 
      speakers={data.speakers.edges}
      />
    <Testimonial
      testimonial={data.homepage.frontmatter.testimonial}
      citationName={data.homepage.frontmatter.citationName}
      citationRole={data.homepage.frontmatter.citationRole}
      />
    <LatestPosts
      posts={data.posts.edges}
      />
    <Venue
      address={data.homepage.frontmatter.address}
      info={data.homepage.frontmatter.venueInfo}
      />
    <Register
      info={data.homepage.frontmatter.registerInfo}
      >
      <div dangerouslySetInnerHTML={{ __html: `<div style="width:100%; text-align:left;"><iframe src="https://eventbrite.co.uk/tickets-external?eid=51593816494&ref=etckt" frameborder="0" height="380" width="100%" vspace="0" hspace="0" marginheight="5" marginwidth="5" scrolling="auto" allowtransparency="true"></iframe><div style="font-family:Helvetica, Arial; font-size:12px; padding:10px 0 5px; margin:2px; width:100%; text-align:left;" ></div></div>` }}></div>
    </Register>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
query homepageQuery {

  homepage: markdownRemark(id: {eq: "df491620-6677-504b-944e-7cf90fca81f2"}) {
    frontmatter {
      headline
      subheadline
      explanationHeadline
      explanationSubheadline
      when
      where
      testimonial
      citationName
      citationRole
      address
      venueInfo
      registerInfo
    }
  }

  speakers: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/speakers/.*$/"}},
    sort: { order: DESC, fields: [frontmatter___order] },
    limit: 5
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

  posts: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/posts/.*$/"}},
    sort: { order: DESC, fields: [frontmatter___date] },
    limit: 4
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