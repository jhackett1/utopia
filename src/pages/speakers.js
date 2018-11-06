import React from 'react'
import { graphql } from "gatsby"
import Helmet from 'react-helmet'

import Layout from '../components/layout/Layout'
import PostHeader from '../components/post-header/PostHeader'
import Speaker from '../components/speaker/Speaker'

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
        lede={data.speakersPage.frontmatter.lede}
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
    speakersPage: markdownRemark(frontmatter: {title: {eq: "speakers"}}) {
      frontmatter {
        lede
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