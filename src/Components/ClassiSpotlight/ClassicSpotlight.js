import React, { useRef } from 'react'
import ClassicCard from './ClassicCard'

function ClassiSpotlight() {
  const cardRef = useRef(null);

  const scrollLeft = () => {
    cardRef.current.scrollBy({ left: -350, behavior: 'smooth' });
  };

  const scrollRight = () => {
    cardRef.current.scrollBy({ left: 350, behavior: 'smooth' });
  };
  return (
    <div>
      <p className='feature spotlight_title'>Classic Spotlight </p>

      <div className='classic_container'>
        <button className='classic_button_right ' onClick={scrollLeft}> &lt; </button>
        <ClassicCard />
        <button className='classic_button_left ' onClick={scrollRight}> &gt; </button>
      </div>
    </div>
  )
}

export default ClassiSpotlight
