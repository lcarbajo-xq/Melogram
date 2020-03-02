import React , { Fragment } from 'react'

import { Article, ImageWrapper, Image } from './styles'

import { useLazyLoad } from './../../hooks/useLazyLoad'

import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import { FavButton } from '../FavButton'
import { Link } from '@reach/router'

export const PhotoCard = ({ id, liked, likes = 0, src = '' }) => {

    //Hacemos la llamada al lazyload para ejecutarlo en el DOM

    const [ Show, ref ] = useLazyLoad ()   

    //El Icono del Like será uno u otro dependiendo del valor de liked. Renderizaremos Icon

    // Variable para setear el local storage. Con cada valor que le llegue, va a intentar guardarlo
    // en el local storage, bajo el nombre '

    return (
        <Article ref= { ref }>
            {
                Show &&  <Fragment>
                            <Link to={`/detail/${id}`}>
                                <ImageWrapper>
                                    {
                                        src &&
                                    <Image src={ src } /> }
                                </ImageWrapper>
                            </Link>
                            {/* Usamos el setLocalStorage para modificar el "like" con cada click */}
                            <ToggleLikeMutation>
                                { ( toggleLike ) => {
                                   const handleFavClick = () => { 
                                        toggleLike( { variables: {
                                            input: { id }
                                        }}) 
                                    }
                                   return <FavButton onClick={ handleFavClick } likes={ likes } liked= { liked } /> 
                                    }
                                }
                            </ToggleLikeMutation>         
                         </Fragment>
            }
        </Article>
    ) 
}