import React, { Component } from 'react'

import styles from './offline-bar.module.sass'

export default class OfflineBar extends Component{
    constructor(){
        super()
        this.state = {
            offline: false
        }
    }

    componentDidMount(){
        this.setState({
            offline: !navigator.onLine
        })
    }

    render(){
        if(this.state.offline){
            return(
                <section className={styles.offlineBar}>
                    <div className={styles.inner}>
                        <p className={styles.message}><strong className={styles.tag}>It looks like you're offline</strong> You can still use Utopia, but some features won't work.</p>
                    </div>
                </section> 
            )
        } else {
            return(
                <></>
            )
        }
    }
}

