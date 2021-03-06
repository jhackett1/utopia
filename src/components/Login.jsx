import React from 'react'
import { AppContext } from './Provider'
import close from './cross.svg'
import styles from './login.module.sass'
import { navigate } from 'gatsby';

export default class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            page: 1,
            password: "",
            invalid: false
        }
    }

    advance = (e) => {
        e.preventDefault()
        if(this.state.password === process.env.GATSBY_DELEGATE_PASSWORD){
            this.setState({
                page: 2,
                invalid: false
            })
            this.context.logIn()
            setTimeout(()=>{
                navigate('/schedule')
                this.context.toggleModal()
            }, 1000)
        } else {
            this.setState({
                invalid: true
            })
        }
    }

    changePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    render(){
        return(
            <AppContext.Consumer>
                {(context)=>
                    <>
                        {(context.modalOpen) ? 
                            <>
                            <div className={styles.overlay} onClick={context.toggleModal}></div>
                            <div className={styles.modalHolder}>
                                <section className={styles.modal}>
                                    <button className={styles.closeIcon} name="Close event details" onClick={context.toggleModal}><img src={close} alt="Close event details"/></button>
                                    {(this.state.page === 1)?
                                        <>
                                            <p>Registered delegates can access the full conference schedule and exclusive video livestreams.</p>
                                            <p>To access them, enter the delegate password we sent to your email address.</p>
                                            <form className={styles.form} onSubmit={this.advance}>
                                                <label className={styles.fieldLabel} htmlFor="password">Password</label>
                                                <input required className={styles.field} type="password" placeholder="Your delegate password" name="password" value={this.state.password} onChange={this.changePassword}/>
                                                <button className={styles.button} type="submit">Get access</button>
                                            </form>
                                            {(this.state.invalid)?
                                                <p className={styles.validation}>That's not the right password.</p>
                                            : null}
                                        </>
                                    :
                                        <>
                                            <h2>You're in!</h2>
                                            <p>Hang tight, you'll be redirected in a moment.</p>
                                        </>
                                    }
                                </section>
                            </div>
                            </>
                        : null}
                    </>
                }
            </AppContext.Consumer>
        )
    }
}

Login.contextType = AppContext