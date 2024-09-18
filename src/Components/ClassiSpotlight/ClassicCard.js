import React from 'react'
import './ClassicSpotlight.css'
import { button } from 'framer-motion/client';

function importAllImages(r) {
  return r.keys().map(r);
}

const images = importAllImages(require.context('./assets', false, /\.(png|jpg)$/));

function Card() {
  return (
    
    <div className='classic_card'>
      {images.map((image, index) => (
        <img className='classic_item' key={index} src={image} alt={`Image ${index + 1}`} />
      ))}
    </div>
  )
}

export default Card
