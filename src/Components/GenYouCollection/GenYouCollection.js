import React, { useEffect, useState } from 'react'
// import { useState } from 'react';
// import products from './Product';
import { fetchProducts } from '../productApi'
import './GenYouCollection.css'
import { useNavigate } from 'react-router-dom';



function GenYouCollection() {

    const [product, setProduct] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts().then(data => setProduct(data)).catch(error => console.error(error))
            ;
    }, []);

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`)
    }

    return (
        <div className='main-container'>
            <p className='feature'>Gen Your Collection</p>
            <div className="gen-container">
                {product.map(product => (
                    <div className='product-card' onClick={()=> handleProductClick(product._id)}>
                        <img className='product-image' src={`http://localhost:3000/assets/${product.productMainImage}`} alt="" />
                        <div className="product-details">
                            <p className='product-heading'>{product.productName}</p>
                            <p className='product-price'>₹{product.productPrice}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GenYouCollection
