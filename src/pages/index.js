import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import TimePlace from '../components/time-place'
import Speakers from '../components/speakers'
import Testimonial from '../components/testimonial'
import LatestPosts from '../components/latest-posts'
import Venue from '../components/venue'

const IndexPage = () => (
  <Layout>
    <Hero/>
    <TimePlace/>
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
      posts={[
        {
          title: "A Faster and More Flexible Home Page that Delivers the News Readers Want",
          href: "#"
        }, {
          title: "Home Page that Delivers the News Readers Want",
          href: "#"
        }, {
          title: "A Faster and More Flexible Home Page that Delivers the News Readers Want",
          href: "#"
        }
      ]}
      />
    <Venue/>
  </Layout>
)

export default IndexPage
