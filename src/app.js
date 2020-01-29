import React, { Fragment } from 'react'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
import { PhotoCardWithQuery } from './container/PhotCardWithQuery'
import { Home } from './pages/Home'
import { Router } from '@reach/router'

export const App = () => {
    const urlParams = new window.URLSearchParams( window.location.search )
    const detailId = urlParams.get( 'detail' )
   return ( <div>
        <Logo />
        <GlobalStyle />
        {
            detailId 
            ? <PhotoCardWithQuery id= { detailId }/>
            : <Router>
                <Home path='/'/>
                <Home path='/pet/:id' />
            </Router>
        }
    </div>
   )
}