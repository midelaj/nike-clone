import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { fetchProducts } from '../productApi';
import './ProductMenu.css'
import { useNavigate } from 'react-router-dom';


function ProductMenu() {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts().then(data => setProduct(data)).catch(error => console.log(error)
        )
    }, []);

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`)
    }

    return (
        <div>
            <div className='productMenu-container'>
                {
                    product.map(product => (
                        <Card style={{ width: '18rem' }} onClick={() => handleProductClick(product._id)}>
                            <Card.Img variant="top" style={{ height: '300px' }} src={`http://localhost:3000/assets/${product.productMainImage}`} />
                            <Card.Body>
                                <Card.Title>{product.productName}</Card.Title>
                                <Card.Text className='productMenu-text'>
                                    {product.producDetials}
                                </Card.Text>
                                <Card.Title className='productMenu-text'> ₹ {product.productPrice}</Card.Title>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>

        </div>
    );
}

export default ProductMenu
