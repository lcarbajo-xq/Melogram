import React, { Fragment } from 'react'

import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotocards } from '../container/ListOfPhotocards'

import { Layout } from '../components/Layout'

/* ***- 
        COMPONENTE PÁGINA HOME:
        RENDEREIZAMOS LIST OF CATEGORIES Y LIST OF PHOTOCARDS (TODAS O SI SE ESPECIFICA EL ID, LAS RELATIVAS AL ID)
   *** */
const HomePage = ( { id } ) => {
   return ( <Layout title='Make Music Social' subTitle='Share your music tips in Melogram'>
                <ListOfCategories /> 
                <ListOfPhotocards categoryId={ id }/>
            </Layout> )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
   return prevProps.id === props.id
})