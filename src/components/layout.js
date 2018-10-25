import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import 'animate.css/animate.min.css'
import './layout.sass'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={`${data.site.siteMetadata.title} | ${data.site.siteMetadata.description}`}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
          ]}
          >
          <html lang="en" />
        </Helmet>
        <Header/>
          {children}
        <Footer/>
      </>
    )}
  />
)

export default Layout
