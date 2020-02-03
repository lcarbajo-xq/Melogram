import React, { Fragment } from 'react'
import { NavBar } from './components/NavBar'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Router } from '@reach/router'
import { User } from './pages/User'
import { Favs } from './pages/Favs'
import { NonRegisteredUser } from './pages/NonRegisteredUser'

const UserLogged = ( { children } ) => {
    return children( { isAuth: true } )
}

export const App = () => {
    const urlParams = new window.URLSearchParams( window.location.search )
    const detailId = urlParams.get( 'detail' )
   return ( <div>
        <Logo />
        <GlobalStyle />
        <Router>
            <Home path='/'/>
            <Home path='/pet/:id' />
            <Detail path='/detail/:detailId' />
        </Router>
        <UserLogged>
            {
                ( { isAuth } ) => 
                    isAuth
                    ?
                    <Router>
                        <Favs path='/favs' />
                        <User path='/user'/>
                    </Router>
                    :
                    <Router>
                        <NonRegisteredUser path='/favs' />
                        <NonRegisteredUser path='/user'/>
                    </Router>
            }
        </UserLogged>
        <NavBar />
    </div>
   )
}