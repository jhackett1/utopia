const windowGlobal = typeof window !== 'undefined' && window

// Check if login token exists
export const checkLogin = () => {
    if(windowGlobal){
        return windowGlobal.localStorage.getItem('loggedIn')
    } else {
        return false
    }
}

// Create a login token
export const setLogin = () => {
    if(windowGlobal){
        return windowGlobal.localStorage.setItem('loggedIn', 'true')
    } else {
        return false
    }
}

// Remove the login token
export const clearLogin = () => {
    if(windowGlobal){
        return windowGlobal.localStorage.removeItem('loggedIn')
    } else {
        return false
    }
}