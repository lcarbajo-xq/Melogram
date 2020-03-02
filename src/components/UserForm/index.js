import React, { Fragment } from 'react'
import { Form, Input, Title, Error } from './styles'
import { SubmitButton } from '../SubmitButton'

import { useInputValue } from '../../hooks/useInputValue'

export const UserForm = ( { disabled, error, onSubmit, title } ) => {

    const email = useInputValue('')
    const password = useInputValue('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit ( { email: email.value, password: password.value } )
        
    }

    return (<Fragment>
                <Title>{ title }</Title>
                <Form disabled= { disabled } onSubmit= { handleSubmit }>
                    <Input disabled= { disabled } placeholder='Email' { ...email } />
                    <Input disabled= { disabled } placeholder='password' type='password' { ...password } />
                    <SubmitButton disabled= { disabled }>
                        { title }
                    </SubmitButton>
                </Form> 
                {
                    error && <Error>{ error }</Error>
                }
        </Fragment>
        )
}