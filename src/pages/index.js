
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
    <Hero/>
    <Explanation/>
    <Speakers speakers={[{
      name: "Namey McName",
      role: "Role goes here",
      avatarSrc: "http://placehold.it/100x100",
      href: "#"
    },{
      name: "Fiona Harris",
      role: "Head of Things, Company Ltd",
      avatarSrc: "http://placehold.it/100x100",
      href: "#"
    },{
      name: "Namey McName",
      role: "Designer, GDS",
      avatarSrc: "http://placehold.it/100x100",
      href: "#"
    },{
      name: "Fiona Harris",
      role: "Head of Things, Company Ltd",
      avatarSrc: "http://placehold.it/100x100",
      href: "#"
    },{
      name: "Jane Speaker",
      role: "Designer, GDS",
      avatarSrc: "http://placehold.it/100x100",
      href: "#"
    }]}/>
    <Testimonial/>
    <LatestPosts
      posts={data.posts.edges}
      />
    <Venue/>
    <Register>
      <div dangerouslySetInnerHTML={{ __html: `<div style="width:100%; text-align:left;"><iframe src="https://eventbrite.co.uk/tickets-external?eid=51593816494&ref=etckt" frameborder="0" height="380" width="100%" vspace="0" hspace="0" marginheight="5" marginwidth="5" scrolling="auto" allowtransparency="true"></iframe><div style="font-family:Helvetica, Arial; font-size:12px; padding:10px 0 5px; margin:2px; width:100%; text-align:left;" ></div></div>` }}></div>
    </Register>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query homepageQuery {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      limit: 3
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