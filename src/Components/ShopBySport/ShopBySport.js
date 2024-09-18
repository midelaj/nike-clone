import React from 'react'
import './ShopBySport.css'

function importAllImages(r) {
    return r.keys().map(r);
}

const images = importAllImages(require.context('./assets', false, /\.(png|jpg)$/));
const buttons = ["Dance", "Skateboarding", "Yog", "Tennis", "Traing and Gym", "Basketball", "Football", "Running"]


function ShopCard() {
    return (
        <div className='shop-container'>
            <p className='feature shop_title'>Shop by Sport</p>
            <div className='shop_card_container'>
                {images.map((images, index) => (
                    <div className={`card ${index === 0 ? 'first-card' : ''}`} key={index}>
                        <img src={images} alt="Sport" className="card-image" />
                        <button className="card-button">{buttons[index]}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShopCard
