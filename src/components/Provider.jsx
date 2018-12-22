import React from 'react'

export const AppContext = React.createContext()

export default class AppProvider extends React.Component{
    state = {
        loggedIn: false
    }

    logIn = () => {
        this.setState({
            loggedIn: true
        })
    }

    logOut = () => {
        this.setState({
            loggedIn: false
        })
    }

    render(){
        console.log(this.state)
        return(
            <AppContext.Provider value={{
                    ...this.state, 
                    logIn: this.logIn,
                    logOut: this.logOut
                }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}