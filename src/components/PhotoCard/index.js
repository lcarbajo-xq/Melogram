import React , { useEffect, useRef, useState, Fragment } from 'react'

import { Article, ImageWrapper, Image, Button } from './styles'

import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_hamsters.jpg'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {

    const ref = useRef ( null )

    const [ Show, setShow ] = useState( false ) 

    useEffect ( function() {
        const observer = new window.IntersectionObserver (function (entries) {
            const { isIntersecting } = entries[0]
            if (isIntersecting ){
                console.log('Show')
                setShow('true')
                observer.disconnect()
            }
        })
        observer.observe(ref.current)
    }, [ ref ])

    return (
        <Article ref= { ref }>
            {
                Show &&  <Fragment>
                            <a href={`/detail/${id}`}>
                                <ImageWrapper>
                                    <Image src={ src } />
                                </ImageWrapper>
                            </a>
                            <Button>
                                <MdFavoriteBorder size={ 16 } /> { likes } likes
                            </Button>
                         </Fragment>
            }
        </Article>
    ) 
}