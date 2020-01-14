import React from 'react'
import { Logo } from './components/Logo'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './GlobalStyles';
import { ListOfPhotocards } from './components/ListOfPhotocards'

export const App = () => (
    <div>
        <Logo/>
        <GlobalStyle />
        <ListOfCategories /> 
        <ListOfPhotocards />
    </div>
    )