import React from 'react'
import Event from './Event'
import styles from './schedule.module.sass'

export default class extends React.Component{
    render(){

        // Get array of all event times
        let times = []
        this.props.events.map((event)=>{
            return times.push({
                time: event.node.frontmatter.time,
                events: []
            })
        })
        // Remove duplicate times with ES6
        times = times.filter((thing, index, self) =>
            index === self.findIndex((t) => (
                t.time === thing.time
            ))
        )
        // Sort events into strand order
        let events = this.props.events.sort((a, b)=>{
            var aStrand = a.node.frontmatter.strand.toUpperCase();
            var bStrand = b.node.frontmatter.strand.toUpperCase();
            return (aStrand < bStrand) ? -1 : (aStrand > bStrand) ? 1 : 0;
        })
        // For each time, populate with events of that time
        times.map((time)=>{
            return time.events = events.filter((event)=>{
                return event.node.frontmatter.time === time.time
            })
        })
        // And display the results
        return(
            <section className={styles.schedule}>
                    <ol className={styles.allEvents}>
                        {times.map((time, i)=>
                            <ul className={styles.eventsAtSameTime} key={i}>
                                <div className={styles.rowInner}>
                                    <li className={styles.dateLabel}>{time.time}</li>
                                    {time.events.map((event, i)=>
                                        <Event event={event.node.frontmatter} key={i}/>
                                    )}
                                </div>
                            </ul> 
                        )}
                    </ol>
            </section>
        )
    }
}
