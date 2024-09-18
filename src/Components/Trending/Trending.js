import React from 'react'
import DetailBanner from '../DetailBanner/DetailBanner'
import shoe from '../../assets/images/pegasus.webp'
import './Trending.css'

function Trending() {
    return (
        <div className='trending-container'>
            <p className='feature'>Trending</p>
            <div className='newArrival_container'>
                <img className='shoe' src={shoe} alt="" />
                <DetailBanner
                    title="Jordan Women"
                    heading="EARTH TONES"
                    subHeading="Step out in earthy shades inspired by outdoor courts and rugged pigments. We added utilitarian details to our most essential styles for a down-to-earth look and feel."
                    button="shop"
                />
            </div>
        </div>
    )
}

export default Trending
