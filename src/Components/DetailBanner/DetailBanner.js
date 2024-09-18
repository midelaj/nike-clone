import React from 'react'
import './DetailBanner.css'

function DetailBanner(props) {
    return (
        <div className='detail-banner-container'>
            <div className='arrival_details'>
                <p>{props.title}</p>
                <h2 className='arrival_heading'>{props.heading}</h2>
                <p>{props.subHeading}</p>
                <button className='arrival_button'>{props.button}</button>
            </div>
        </div>
    )
}

export default DetailBanner
