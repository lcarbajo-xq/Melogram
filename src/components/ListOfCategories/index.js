import React , { Fragment, useState, useEffect } from 'react'

import { Category } from '../Category/'

import { List, Item } from './styles'
import { render } from 'react-dom'

export const ListOfCategories = () => {

    //Estado 1: Categorias. Por defecto, lista vacia

    const [ categories, setCategories ] = useState ([])

    //Estado 2: Scroll Lateral. Por defecto, false

    const [ showFixed, setShowFixed ] = useState (false)

    // Efecto 1: Obtener DB asíncrono y modificar el State

    useEffect ( function () {
        window.fetch('https://api.myjson.com/bins/ccoom')
            .then( res => res.json() )
            .then( response => {
                setCategories(response)
            })
    }, [])

    // Efecto 2: Renderizado de lista fija

    useEffect (function () {
        const onScroll = e => {
            // newShowFixed es True si el scroll vertical es mayor que 200
            const newShowFixed = window.scrollY > 200
            showFixed != newShowFixed && setShowFixed(newShowFixed)
        }

        document.addEventListener('scroll', onScroll)

    })

    const renderList = (fixed) => (
        // Añadidmos una ternaria para detemrinar el className
        <List className={ fixed ? 'fixed' : '' } >
            {
                categories.map( category => <Item key={category.id}> <Category {...category}/> </Item>) 
            }
        </List>
    )

    return (
        // Tendremos dos listas renderizadas dependiendo del valor de fixed
        // Incluimos ambas en un Fragment
        <Fragment>
            { renderList() }
            { showFixed && renderList(true)}
        </Fragment>
        
    )
}