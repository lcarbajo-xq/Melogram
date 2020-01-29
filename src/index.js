import React from 'react'
import ReactDOM from 'react-dom'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import {App} from './app'

const client = new ApolloClient({ 
    uri: 'https://melogram-server.now.sh/graphql' })

ReactDOM.render(
    <ApolloProvider client={ client } >
        <App />
    </ApolloProvider>, document.getElementById('app'))
