import React from 'react'

import { ImageWrapper, Image, Button } from './styles'

import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_hamsters.jpg'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
    return (
        <article>
            <a href={`/detail/${id}`}>
                <ImageWrapper>
                    <Image src={ src } />
                </ImageWrapper>
            </a>
            <Button>
                <MdFavoriteBorder size={ 16 } /> { likes } likes
            </Button>
        </article>
    ) 
}