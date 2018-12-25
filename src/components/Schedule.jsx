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
        // For each time, populate with events of that time
        times.map((time)=>{
            return time.events = this.props.events.filter((event)=>{
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
