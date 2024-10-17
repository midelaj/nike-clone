import React, { useEffect, useState } from 'react'
import './ProductDetail.css'
import product from '../../assets/products/NIKE+ZOOM+VOMERO+5 (1).png'
import Button from 'react-bootstrap/Button'
import { fetchProductApi } from '../productApi'
import { image } from 'framer-motion/client'
import { useNavigate, useParams } from 'react-router-dom'

const size = ["UK 2.5", "UK 3", "UK 5", "UK 4.5"]



function ProductDetail() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({});
    const [mainImage, setMainImage] = useState('')
    useEffect(() => {
        fetchProductApi(id)
            .then(data => { setProduct(data); setMainImage(data.productMainImage) })
            .catch(error => console.error(error))
    }, [id])

    const handleAddToBag = () => {
        navigate('/cart');
    }



    return (
        <div className='product-container'>
            <div className='product-detail-card'>
                <div className='product-images'>
                    <img className='first-column' src={`http://localhost:3000/assets/${product.productMainImage}`} alt="" onMouseEnter={() => setMainImage(product.productMainImage)} />

                    {product.productImages && product.productImages.map((image, index) => (<img className='first-column' src={`http://localhost:3000/assets/${image}`} alt=''
                        onMouseEnter={() => setMainImage(image)} />
                    ))}

                </div>
                <div className='second-column'>
                    <img src={`http://localhost:3000/assets/${mainImage}`} alt="" />
                </div>
                <div className="product-detail-container">
                    <h1>{product.productName}</h1>
                    <p>men's Shoes</p>

                    <h1>MRP: ₹{product.productPrice}</h1>
                    <p>Inclusive of all taxes</p>
                    <p>(Also includes all applicable duties)</p>
                    <p>select size </p>
                    {product.productSize && product.productSize.map((size, index) => (<Button className='size-button' key={index}>{size}</Button>))}

                    <div className="product-button">
                        <Button className='button' onClick={handleAddToBag}>Add to Bag</Button>
                        <Button className='button'>Favourite</Button>
                    </div>
                    <p>The radiance lives on in the Air Force 1 '07, the b-ball icon that puts a fresh spin on what you know best: crisp materials, bold colours and the perfect amount of flash to make you shine.</p>

                    <li>Colour Shown: Sail/Canyon Pink</li>
                    <li>Style: DC9486-105</li>
                    <li>Country/Region of Origin: Indonesia</li>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
