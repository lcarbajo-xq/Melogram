import React from 'react'
import { PhotoCard } from '../PhotoCard'

/* 
EL RESULTADO DE LA QUERY WITHPHOTOS LLEGA EN FORMA DE OBJETO {DATA} A LIST OF PHOTOCARDSCOMPONENT

 +++++++ INICIALIZAR PHOTOS PARA QUE NO DE ERROR DE UNDEFINED +++++++++++
*/

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}