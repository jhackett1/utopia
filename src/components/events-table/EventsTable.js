import React from 'react'

export default class EventsTable extends React.Component{
    render(){
        let events = this.props.events
        let timeslots = events.edges.map(edge=>edge.node.frontmatter.time).filter((value, index, self) => self.indexOf(value) === index)
        return(
            <ul>
                {timeslots.map((timeslot, i) =>
                    <li key={i}>
                        <span>{timeslot}</span>
                        <ul>
                            {events.edges.filter(event=>{
                                if(event.node.frontmatter.time === timeslot){ return event } else { return false }
                            }).map(event=>
                                <li>{event.node.frontmatter.title}</li>
                            )}
                        </ul>
                    </li>
                )}
            </ul>
        )
    }
}