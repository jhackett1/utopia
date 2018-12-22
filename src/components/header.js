import React from 'react'
import Link from 'gatsby-link'

import logo from './logo.svg'
import Menu from './menu'
import Login from './Login'

import styles from './header.module.sass'

export default class Header extends React.Component{
    constructor(){
        super()
        this.state = {
            modalOpen: false
        }
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render(){
        return(
            <>
            <header className={styles.header}>
                <Link to="/">
                    <img className={styles.logo} src={logo} alt="Utopia logo"/>
                </Link>
                <nav className={styles.nav}>
                    <Menu openModal={this.toggleModal} loggedIn={true}/>
                </nav>
            </header>
            {(this.state.modalOpen)? <Login closeModal={this.toggleModal}/> : null}
            </>
        )
    }
}