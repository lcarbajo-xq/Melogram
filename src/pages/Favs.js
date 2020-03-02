import React  from 'react'
import { ListOfFavs } from '../components/ListOfFavs'
import { GetUserFavorites } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

export const Favs = () => {
    return ( <Layout title='Music Favs' subTitle='Check your favourite tags' >
                <GetUserFavorites>
                    {
                        ( { loading, error, data } )  => {
                            if ( loading ) return <h1> Loading</h1>
                            if ( error ) return <h1>Error</h1>
                            const { favs } = data

                            return <ListOfFavs favs={ favs } />
                        }
                    }
                </GetUserFavorites>
        </Layout> )
}