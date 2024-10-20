import React, { useContext, useEffect, useState } from 'react';
import './ProductDetail.css';
import Button from 'react-bootstrap/Button';
import { fetchProductApi } from '../productApi';
import { useNavigate, useParams } from 'react-router-dom';
import { CartContext } from '../../context /CartContex';
import { toast } from 'react-toastify';

function ProductDetail() {
    const { id } = useParams();

    const { addToCart } = useContext(CartContext);

    const [product, setProduct] = useState({});
    const [mainImage, setMainImage] = useState('');
    const [selectedSize, setSelectedSize] = useState('');

    useEffect(() => {
        fetchProductApi(id)
            .then(data => { setProduct(data); setMainImage(data.productMainImage); })
            .catch(error => console.error(error));
    }, [id]);

    const handleAddToBag = () => {
        if (selectedSize) {
            addToCart({ ...product, size: selectedSize });
        } else {
            alert('Please select a size before adding to bag.');
        }
    };

    return (
        <div className='product-container'>
            <div className='product-detail-card'>
                <div className='product-images'>
                    <img className='first-column' src={`http://localhost:3000/assets/${product.productMainImage}`} alt="" onMouseEnter={() => setMainImage(product.productMainImage)} />
                    {product.productImages && product.productImages.map((image, index) => (
                        <img key={index} className='first-column' src={`http://localhost:3000/assets/${image}`} alt=''
                            onMouseEnter={() => setMainImage(image)} />
                    ))}
                </div>
                <div className='second-column'>
                    <img src={`http://localhost:3000/assets/${mainImage}`} alt="" />
                </div>
                <div className="product-detail-container">
                    <h1>{product.productName}</h1>
                    <p>Men's Shoes</p>
                    <h1>MRP: ₹{product.productPrice}</h1>
                    <p>Inclusive of all taxes</p>
                    <p>(Also includes all applicable duties)</p>
                    <p>Select size </p>
                    {product.productSize && product.productSize.map((size, index) => (
                        <Button
                            className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                            key={index}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size}
                        </Button>
                    ))}
                    <div className="product-button">
                        <Button className='button' onClick={handleAddToBag}>Add to Bag</Button>
                        <Button className='button'>Favourite</Button>
                    </div>
                    <p>{product.description}</p>
                    <ul>
                        <li>Colour Shown: {product.color}</li>
                        <li>Style: {product.styleCode}</li>
                        <li>Country/Region of Origin: {product.origin}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;