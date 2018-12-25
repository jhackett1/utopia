import React from 'react'
import {checkLogin, setLogin, clearLogin} from '../utils/localstorage'

export const AppContext = React.createContext()

export default class AppProvider extends React.Component{
    state = {
        loggedIn: checkLogin(),
        modalOpen: false,
    }

    // Toggle visibility of the login modal
    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    // Log a user in
    logIn = () => {
        this.setState({
            loggedIn: true
        })
        setLogin()
    }

    // Log a user out
    logOut = () => {
        this.setState({
            loggedIn: false
        })
        clearLogin()
    }

    render(){
        return(
            <AppContext.Provider value={{
                    ...this.state, 
                    logIn: this.logIn,
                    logOut: this.logOut,
                    toggleModal: this.toggleModal
                }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}