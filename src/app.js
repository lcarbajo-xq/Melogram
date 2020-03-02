import React, { Fragment, useContext } from 'react'
import { NavBar } from './components/NavBar'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyles'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { NotFound } from './pages/NotFound'
import { Router, Redirect } from '@reach/router'
import { User } from './pages/User'
import { Favs } from './pages/Favs'
import { NonRegisteredUser } from './pages/NonRegisteredUser'
import { Context } from './Context'

/***-- COMPONENTE UserLogged CON RENDER PROPS PARA DETERMINAR QUE COMPONENTE SE DEBE RENDERIZAR,
***-   EN FUNCIÓN DE SI EL USUARIO ESTÁ LOGGEADO O NO -***/

export const App = () => {
    const urlParams = new window.URLSearchParams( window.location.search )
    const detailId = urlParams.get( 'detail' )
    const { isAuth } = useContext(Context)
   return ( <div>
        <Logo />
        <GlobalStyle />
        <Router>
            <NotFound default />
            <Home path='/'/>
            <Home path='/pet/:id' />
            <Detail path='/detail/:detailId' />
            { !isAuth &&  <NonRegisteredUser path='/login' /> }
            { !isAuth &&  <Redirect from='/favs' to='/login' /> }
            { !isAuth &&  <Redirect from='/user' to='/login' /> }
            { isAuth &&  <Redirect from='/login' to='/' /> }
            <Favs path='/favs' />
            <User path='/user'/>
        </Router>
        <NavBar />
    </div>
   )
}