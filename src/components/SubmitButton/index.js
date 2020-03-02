import React from 'react'
import { Button } from './styles'

export const SubmitButton = ({ children, onSubmit} ) => {
    return <Button onClick={ onSubmit }>{ children }</Button>
}