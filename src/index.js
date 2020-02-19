import React from 'react'
import ReactDOM from 'react-dom'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import Context from './Context'

import {App} from './app'

const client = new ApolloClient({
    uri: 'https://melogram-server.now.sh/graphql',
    request: operation => {
        const token = window.sessionStorage.authToken
        const authorization = token ? `Bearer ${ token }` : ''
        operation.setContext({
            headers: {
                authorization
            }
        })
    },

    /* Incluimos la propiedad que permite recibir si el token ha expirado volver a la Home  */ 
    
    onError: error => {
        const { networkError } = error
        if ( networkError && networkError.result.code === 'invalid_token') {
            window.sessionStorage.removeItem('authToken')
            window.location.href='/'
        }
    }
})

ReactDOM.render(
    <Context.Provider value= { { isAuth: false } }>
        <ApolloProvider client={ client } >
            <App />
       </ApolloProvider>
    </Context.Provider>, document.getElementById('app') )
