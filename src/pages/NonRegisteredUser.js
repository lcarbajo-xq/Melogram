import React , { Fragment, useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NonRegisteredUser = () =>  {
    const { activateAuth } = useContext (Context)

    return <Fragment>
        <RegisterMutation>
            {
                ( register,  { data , loading , error } ) => {
                    const onSubmit = ( { email, password } ) => {
                        const input = { email, password }
                        const variables = { input }
                        register( { variables } )
                            .then( ({data}) => {
                                const { signup } = data
                                activateAuth ( signup )
                            })
                            .catch( (error) => { 
                        })
                    }

                    const errorMsg = error && error.graphQLErrors[0].message

                    return <UserForm disabled= { loading } error={ errorMsg } onSubmit = { onSubmit } title='Register' />
                }
            }
        </RegisterMutation>
        <LoginMutation>
            {
                ( login, { data, error, loading} ) => {
                    const onSubmit = ( { email, password } ) => {
                        const input = { email, password }
                        const variables = { input }
                        login( { variables } )
                        .then( ({ data }) => {
                            const { login } = data
                            activateAuth(login)
                        })
                        .catch( (error) => {
                        }) 
                    }

                    const errorMsg = error && error.graphQLErrors[0].message

                    return <UserForm disabled= { loading } error={ errorMsg } onSubmit = { onSubmit } title='Log In' />
                }
            }
        </LoginMutation>    
            
        </Fragment>
}