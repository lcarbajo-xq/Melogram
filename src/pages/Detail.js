import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotCardWithQuery'
import { Layout } from '../components/Layout'

export const Detail = ( { detailId }) => {
   return (
   <Layout title= {`Melogramy - ${detailId}`}>
      <PhotoCardWithQuery id= { detailId }/>
   </Layout > )
}