import React from 'react'
import { graphql } from "gatsby"
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import PostHeader from '../components/post-header'
import Speaker from '../components/speaker'

import styles from './all-speakers.module.sass'

const SpeakersPage = ({ data }) => {
  return(
    <Layout>
      <Helmet
          title={`Speakers | ${data.site.siteMetadata.title}`}
        >
      </Helmet>
      <PostHeader
        title="Speakers"
        lede="We’re welcoming over 15 speakers from across the public and private sectors."
        />
      <ul className={styles.allSpeakers}>
        {(data.speakers.edges.map((speaker, i)=>
          <li className={styles.speaker} key={i}>
            <Speaker
              avatarSrc={speaker.node.frontmatter.image}
              name={speaker.node.frontmatter.title}
              role={speaker.node.frontmatter.role}
              />
          </li>
        ))}
      </ul>
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