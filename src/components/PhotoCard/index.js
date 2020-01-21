import React , { useEffect, useRef, useState, Fragment } from 'react'

import { Article, ImageWrapper, Image, Button } from './styles'

import { useLocalStorage } from './../../hooks/useLocalStorage'

import { useLazyLoad } from './../../hooks/useLazyLoad'

import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_hamsters.jpg'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {


    // Estado para manejar los "likes" en local storage

        //Creamos una key unica like-id_de_photocard para almacenar el valor unico de cada like de photocard

    const key = `like-${ id }`

        //El estado de "likes" lo recuperaremos del local storage invondo el valor del like de cada photocard
        //a partir de la key unica

    const [ Show, ref ] = useLazyLoad ()   
    const [ liked, setLiked ] = useLocalStorage( key, false)

    //El Icono del Like será uno u otro dependiendo del valor de liked. Renderizaremos Icon

    const Icon = liked ? MdFavorite : MdFavoriteBorder

    // Variable para setear el local storage. Con cada valor que le llegue, va a intentar guardarlo
    // en el local storage, bajo el nombre '

    return (
        <Article ref= { ref }>
            {
                Show &&  <Fragment>
                            <a href={`/detail/${id}`}>
                                <ImageWrapper>
                                    <Image src={ src } />
                                </ImageWrapper>
                            </a>
                            {/* Usamos el setLocalStorage para modificar el "like" con cada click */}
                            <Button onClick= { () => setLiked(!liked )}>
                                <Icon size={ 16 } /> { likes } likes
                            </Button>
                         </Fragment>
            }
        </Article>
    ) 
}