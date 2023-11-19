import React from 'react'
import { SliderPics } from './components/sliderPics/SliderPics'
import { Quienes } from './components/quienes/Quienes'
import { SliderProducts } from './components/sliderProducts/SliderProducts'
import './home.css'
import { Video } from './components/video/Video'

export const Home = () => {
  return (
    <div>
        <SliderPics />
        <Quienes />
        <SliderProducts />
        <Video />
    </div>
  )
}
