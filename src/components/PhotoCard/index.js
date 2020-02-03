import React , { Fragment } from 'react'

import { Article, ImageWrapper, Image } from './styles'

import { useLocalStorage } from './../../hooks/useLocalStorage'
import { useLazyLoad } from './../../hooks/useLazyLoad'

import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import { FavButton } from '../FavButton'
import { Link } from '@reach/router'

export const PhotoCard = ({ id, likes = 0, src = '' }) => {

    //Creamos una key unica like-id_de_photocard para almacenar el valor unico de cada like de photocard

    const key = `like-${ id }`

    //Hacemos la llamada al lazyload para ejecutarlo en el DOM

    const [ Show, ref ] = useLazyLoad ()   
    
    //El estado de "likes" lo recuperaremos del local storage invocando el valor del like de cada photocard
    //a partir de la key unica

    const [ liked, setLiked ] = useLocalStorage( key, false)

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
                                        !liked && toggleLike( { variables: {
                                            input: { id }
                                        }})
                                        setLiked (!liked) }
                                   return <FavButton 
                                onClick={ handleFavClick } likes={ likes } liked= { liked } /> }
                                }
                                
                            </ToggleLikeMutation>    
                               
                         </Fragment>
            }
        </Article>
    ) 
}