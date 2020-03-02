import React , { Fragment, useState, useEffect } from 'react'

import { Category } from '../Category/'

import { List, Item } from './styles'

// ++--- CUSTOM HOOK PARA EL FETCHIN DE DATOS ---**

function useCategoriesData () {

    //Estado local para el Custom Hook -> Las Categorías 

    const [ categories, setCategories ] = useState ([])

    //Estado local para saber cuando estamos obteniendo información 

    const [ loading, setLoading ] = useState( false );

    // Tendrá el efecto que hace el fetchin de datos

    useEffect ( function () {
        setLoading ( true );
        window.fetch('https://api.myjson.com/bins/ccoom')
            .then( res => res.json() )
            .then( response => {
                setCategories(response)
                setLoading( false )
            })
    }, [])

    // EL custom Hook debe devolver algo siempre -> Las categorias y el estado de loading

    return { categories, loading }
}

const ListOfCategoriesComponent = () => {

    // Usamos el Custom Hook para el fetchin de datos

    const { categories, loading } = useCategoriesData ();

    //Estado: Scroll Lateral. Por defecto, false

    const [ showFixed, setShowFixed ] = useState (false)

    // Efecto : Renderizado de lista fija

    useEffect (function () {
        const onScroll = e => {
            // newShowFixed es True si el scroll vertical es mayor que 200
            const newShowFixed = window.scrollY > 200
            showFixed != newShowFixed && setShowFixed(newShowFixed)
        }

        document.addEventListener('scroll', onScroll)

        return () => document.removeEventListener('scroll', onScroll)
        }, [showFixed])

    const renderList = (fixed) => (
        // Añadidmos una ternaria para detemrinar el className
            // En lugar de usar un ClassName -> Usaremos las props para Styled
            // Components, le pasamos a la "prop" fixed el valor de "fixed" de 
            // renderlist
            // (Antes) -> <List className={ fixed ? 'fixed' : '' } >
        <List fixed={ fixed } >

            {/* Dependiendo del "Loading" mostramos el valor por defecto
                de Category o toda la lista de Category */}

            { loading 
                ?  <Item key='loading'> <Category /></Item>
                :  categories.map( category => 
                        <Item key={category.id}> 
                            <Category  {...category} path={ `/pet/${category.id} `}/> 
                        </Item> ) 
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

export const ListOfCategories = React.memo( ListOfCategoriesComponent )