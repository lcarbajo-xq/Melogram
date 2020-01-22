import React from 'react'
import ReactDOM from 'react-dom'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import {App} from './app'

const client = new ApolloCLient({ 
    uri: 'https://melogram.lcarbajo.now.sh/graphql' })

ReactDOM.render(
    <ApolloProvider client={ client } >
        <App />
    </ApolloProvider>, document.getElementById('app'))
