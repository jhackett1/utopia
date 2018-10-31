import React from 'react'

import Button from './button'

import styles from './login.module.sass'

export default class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            page: 1,
            email: ""
        }
    }

    advance = (e) => {
        console.log(this.state)
        e.preventDefault()
        this.setState({
            page: 2
        })
    }

    changeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    render(){
        return(
            <>
                <div className={styles.overlay} onClick={this.props.closeModal}></div>
                <div className={styles.loginHolder}>
                    <section className={styles.login}>
                        {(this.state.page === 1)?
                            <>
                                <p>Registered delegates can access the full conference schedule and exclusive video livestreams.</p>
                                <p>To access them, just enter the email address you registered with. We’ll send you a unique link to verify you own the email.</p>
                                <form onSubmit={this.advance}>
                                    <label htmlFor="email">Email</label>
                                    <input required type="email" placeholder="Your email address" name="email" value={this.state.email} onChange={this.changeEmail}/>
                                    <button type="submit">Get access</button>
                                </form>
                            </>
                        :
                            <>
                                <h2>Thanks!</h2>
                                <p>We sent an email to <strong>{this.state.email}</strong></p>
                                <p>If this email address was used to claim a ticket to Utopia, you’ll find a magic link that will sign you in.</p>
                                <p>Feel free to close this window.</p>
                            </>
                        }
                    </section>
                </div>
            </>
        )
    }
}