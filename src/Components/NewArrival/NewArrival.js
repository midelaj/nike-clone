import React from 'react'
import shoe from '../../assets/images/pegasus.webp'
import './NewArrival.css'
import DetailBanner from '../DetailBanner/DetailBanner'

function NewArrival() {
    return (
        <div className='newArrival_container'>
            <img className='shoe' src={shoe} alt="" />
            <DetailBanner
                title="Nike Pegasus"
                heading="DON'T WASTE YOUR ENERGY"
                subHeading="Run in Pegasus. Feel the responsive energy return of Air Zoomo and all-new ReactX foam"
                button="shop"
            />
        </div>
    )
}

export default NewArrival
