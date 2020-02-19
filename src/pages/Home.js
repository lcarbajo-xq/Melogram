import React, { Fragment } from 'react'

import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotocards } from '../container/ListOfPhotocards'

/* ***- 
        COMPONENTE PÁGINA HOME:
        RENDEREIZAMOS LIST OF CATEGORIES Y LIST OF PHOTOCARDS (TODAS O SI SE ESPECIFICA EL ID, LAS RELATIVAS AL ID)
   *** */
export const Home = ( { id } ) => {
   return ( <Fragment>
                 <ListOfCategories /> 
                <ListOfPhotocards categoryId={ id }/>
            </Fragment> )
}