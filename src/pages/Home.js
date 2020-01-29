import React, { Fragment } from 'react'

import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotocards } from '../container/ListOfPhotocards'

export const Home = ( { id } ) => {
   return ( <Fragment>
                 <ListOfCategories /> 
                <ListOfPhotocards categoryId={ id }/>
            </Fragment> )
}