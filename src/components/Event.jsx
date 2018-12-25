import React from 'react'
import styles from './schedule.module.sass'
import EventModal from './EventModal'

export default class extends React.Component{

    state = {
        modalOpen: false
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    closeModal = () => {
        this.setState({
            modalOpen: false
        })
    }

    render(){
        return(
            <>
                <li className={styles.event}>
                    <button className={styles.eventButton} name="Open event details"  onClick={this.toggleModal}>
                        <h2 className={styles.eventTitle}>{this.props.event.title}</h2>
                        {/* {console.log(event)} */}
                        <p className={styles.eventInfo}>{this.props.event.duration} mins / {this.props.event.venue}</p>
                    </button>
                </li>
                {(this.state.modalOpen)? <EventModal event={this.props.event} closeModal={this.closeModal} /> : null}
                
            </>
        )
    }
}
