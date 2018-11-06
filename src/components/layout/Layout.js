import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { slide as PanelMenu } from 'react-burger-menu'

import Menu from '../menu/Menu'
import OfflineBar from '../offline-bar/OfflineBar'
import Header from '../header/Header'
import Footer from '../footer/Footer'

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
      <div>
        <PanelMenu width={ 240 } className="panel-menu">
          <Menu vertical/>
        </PanelMenu>
        <Helmet
          title={`${data.site.siteMetadata.title} | ${data.site.siteMetadata.description}`}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
          ]}
          >
          <html lang="en" />
        </Helmet>
        <OfflineBar/>
        <Header/>
        {children}
        <Footer/>
      </div>
    )}
  />
)

export default Layout
