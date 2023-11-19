import React from 'react'
import { Navbar } from './components/navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/views/home/Home.jsx'
import { Products } from './components/views/products/Products.jsx'
import { Contact } from './components/views/contact/Contact.jsx'
import { Footer } from './components/footer/Footer.jsx'

import './app.css'

export const App = () => {
  return (
    <>
      <Navbar />
      <div className='body-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}
