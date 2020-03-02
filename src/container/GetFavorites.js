import React from 'react'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const USER_FAVS = gql`
query getUserFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

export const GetUserFavorites = ( { children } ) => {
   return  <Query query = { USER_FAVS } fetchPolicy= 'network-only' >
        { children }
    </Query>
}