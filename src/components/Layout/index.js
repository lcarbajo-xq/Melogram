import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

import { Div, Title, Subtitle } from './styles'

export const Layout = ( { children, title, subTitle } ) => {
    return (<Fragment>
                <Helmet>
                    { title && <title>(8) Melogram - { title } </title>}
                    { subTitle && <meta name='description' content={ subTitle }/>}
                </Helmet>
                <Div>
                    { title && <Title>{ title }</Title> }
                    { subTitle && <Subtitle>{ subTitle }</Subtitle> }
                    { children }
                </Div>
        </Fragment>)
}