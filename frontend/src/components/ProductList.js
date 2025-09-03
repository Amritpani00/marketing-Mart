import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ProductService from '../services/ProductService';

const ProductList = () => {
    const { addToCart } = useContext(CartContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getAllProducts().then(
            (response) => {
                setProducts(response.data);
            },
            (error) => {
                console.log(error);
            }
        );
    }, []);

    return (
        <div>
            <h2>Products</h2>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.imageUrl || 'https://via.placeholder.com/150'} alt={product.name} style={{width: '100%'}}/>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
