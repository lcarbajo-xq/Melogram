import React, { createContext , useState } from 'react'

export const Context = createContext ()

const Provider = ( { children } ) => {
    const [ isAuth , setIsAuth ] = useState( () => {
        return window.sessionStorage.getItem ('authToken')
    } )

    const value = {
        isAuth,
        activateAuth: authToken => {
            setIsAuth(true)
            window.sessionStorage.setItem('authToken', authToken )
        }
    }
    return  ( 
        <Context.Provider value= {value } >
            { children }
        </Context.Provider>
    )
}

export default {
    Provider,
    Consumer: Context.Consumer
}