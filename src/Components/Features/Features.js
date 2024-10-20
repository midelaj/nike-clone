import React from 'react'
import feature1 from './assets/feature1.png'
import feature2 from './assets/feature2.png'
import feature3 from './assets/feature3.jpg'
import './Features.css'
import { Link } from 'react-router-dom'


function Features() {
  const feature = [{
    src: feature1,
    title: "Run in Pegasus 41",
    button: "shop"
  },
  {
    src: feature2,
    title: "Giannis Freak 6 'Naija'",
    button: "shop"
  },
  {
    src: feature3,
    title: "Nike Phoenix Fleece",
    button: "shop"
  }]
  return (
    <div >
      <p className='feature'>Featured</p>
      <div className='feature_card'>
        {feature.map((feature, index) => (
          <Link to='/items' key={index}>
            <div >
              <img className='feature_image' src={feature.src} alt="" />
              <p className='feature_title'>{feature.title}</p>
              <p className='feature_button'>{feature.button}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Features
