import React from 'react'
import Link from 'gatsby-link'
import styles from './schedule.module.sass'
import close from './cross.svg'
import { StaticQuery, graphql } from "gatsby"

export default class extends React.Component{

    componentDidMount(){
        
    }

    render(){
        return(
            <StaticQuery
                query={graphql`
                query HeadingQuery {
                    speakers: allMarkdownRemark(
                        filter: {
                            fileAbsolutePath: {regex: "/speakers/.*$/"}
                        }
                    ) {
                        edges {
                            node {
                                frontmatter {
                                    title
                                    role
                                    image
                                }
                            }
                        }
                    }
                }
                `}
                render={data => {

                    let thisSpeaker = null

                    try {
                        thisSpeaker = data.speakers.edges.filter((speaker)=>{
                            return speaker.node.frontmatter.title === this.props.event.speaker
                        })[0].node.frontmatter;
                    } catch(e){
                        console.log(e)
                    }

                    return(
                        <>
                            <div className={styles.overlay} onClick={this.props.closeModal}></div>
                            <div className={styles.modalHolder}>
                                <article className={styles.modal}>
                                    <button className={styles.closeIcon} name="Close event details" onClick={this.props.closeModal}><img src={close} alt="Close event details"/></button>
                                    <div className={styles.eventModalHeader}>
                                        <h2 className={styles.eventTitleBig}>{this.props.event.title}</h2>
                                        <p className={styles.eventInfo}>{this.props.event.time} / {this.props.event.duration} mins / {this.props.event.venue}</p>
                                        <span className={styles.strandLabel}>{this.props.event.strand}</span>
                                    </div>
                                    <p className={styles.eventDescription}>{this.props.event.description}</p>
                                    {(this.props.event.filmed) ? <p className={styles.eventInfo}>This event will be filmed.</p> : null}
                                    {(this.props.event.slides) ? <a className={styles.button} target="blank" href={this.props.event.slides}>Download slides</a> : null}
                                    {(this.props.event.filmed) ? <a className={styles.buttonOutline} to="https://civilservice.govintra.net/live-event/fset-webcast/">Go to live stream</a> : null}
                                    {(thisSpeaker) ? <div className={styles.speakerFooter}>
                                        <img className={styles.speakerImage} src={thisSpeaker.image} alt={thisSpeaker.title}/>
                                        <h4 className={styles.speakerName} >{thisSpeaker.title}</h4>
                                        <p className={styles.speakerRole} >{thisSpeaker.role}</p>
                                    </div> : null }
                                </article>
                            </div>
                        </>
                    )
                }}
            />
        )
    }
}
