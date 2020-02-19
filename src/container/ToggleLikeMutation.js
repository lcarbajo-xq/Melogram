import React from 'react'

import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'

const LIKE_PHOTO = gql`
mutation likePhoto{
  likePhoto(input: {id: 1 } ){
    id,
    liked,
    likes
  }
}
`

export const ToggleLikeMutation = ({ children }) => {
    return <Mutation mutation={ LIKE_PHOTO }>
              { children }    
         </Mutation> 
}