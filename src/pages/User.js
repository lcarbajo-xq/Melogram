import React, { Fragment, useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton as EndSessionButton } from '../components/SubmitButton'

export const User = () => {
    const { removeAuth } = useContext ( Context )
    return <Fragment>
            <h1>User Site</h1>
            <EndSessionButton onSubmit= { removeAuth } > Cerrar Sesión </EndSessionButton> 
        </Fragment>
}