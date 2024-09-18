import React from 'react'
import productDetails from './Product';
import './GenYouCollection.css'



function importAllImages(r) {
    return r.keys().map(r);
}

const images = importAllImages(require.context('./assets', false, /\.(png|jpg)$/));


function GenYouCollection() {
    return (
        <div className='main-container'>
            <p className='feature'>Gen Your Collection</p>
            <div className="gen-container">
                {images.map((images, index) => (

                    <div className={`gen - card - container ${index === 0 ? ' gen-first-card' : ''}`} key={index}>
                        <img className='product-image' src={images} alt="Sport" />
                        <p className='product-title'>{productDetails[index]?.title}</p>
                        <p className='product-subtitle'>{productDetails[index]?.subTitle}</p>
                        <p className='product-price'>{productDetails[index]?.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GenYouCollection
