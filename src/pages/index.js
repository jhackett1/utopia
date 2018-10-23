import React from 'react'
import Layout from '../components/layout'

import Hero from '../components/hero'
import Explanation from '../components/explanation'
import Speakers from '../components/speakers'
import Testimonial from '../components/testimonial'
import LatestPosts from '../components/latest-posts'
import Venue from '../components/venue'
import Register from '../components/register'

const IndexPage = () => (
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
      posts={[
        {
          title: "A faster and more flexible home page that delivers the news readers want",
          href: "#"
        }, {
          title: "Home page that delivers the news readers want",
          href: "#"
        }, {
          title: "A faster and more flexible home page that delivers the news readers want",
          href: "#"
        }
      ]}
      />
    <Venue/>
    <Register>
      <div dangerouslySetInnerHTML={{ __html: `<div style="width:100%; text-align:left;"><iframe src="https://eventbrite.co.uk/tickets-external?eid=51593816494&ref=etckt" frameborder="0" height="360" width="100%" vspace="0" hspace="0" marginheight="5" marginwidth="5" scrolling="auto" allowtransparency="true"></iframe><div style="font-family:Helvetica, Arial; font-size:12px; padding:10px 0 5px; margin:2px; width:100%; text-align:left;" ><a class="powered-by-eb" style="color: #ADB0B6; text-decoration: none;" target="_blank" href="https://www.eventbrite.co.uk/">Powered by Eventbrite</a></div></div>` }}></div>
    </Register>
  </Layout>
)

export default IndexPage
