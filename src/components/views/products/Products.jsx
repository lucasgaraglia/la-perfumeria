import React from 'react'
import { Catalog } from './components/catalog/Catalog.jsx'
import { Searchbar } from './components/searchbar/Searchbar.jsx'

export const Products = () => {
  return (
    <>
      <Searchbar />
      <Catalog />
    </>
  )
}
