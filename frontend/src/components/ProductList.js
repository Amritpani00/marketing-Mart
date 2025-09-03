import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const mockProducts = [
    { id: '1', name: 'Apple', description: 'A crisp, sweet apple.', price: 0.50, imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b69665?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '2', name: 'Banana', description: 'A ripe, yellow banana.', price: 0.25, imageUrl: 'https://images.unsplash.com/photo-1571771894824-c8fdc9fe4252?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '3', name: 'Milk', description: 'A carton of fresh milk.', price: 2.50, imageUrl: 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?q=80&w=2914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: '4', name: 'Bread', description: 'A loaf of fresh bread.', price: 3.00, imageUrl: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const ProductList = () => {
    const { addToCart } = useContext(CartContext);

    return (
        <div>
            <h2>Products</h2>
            <div className="product-list">
                {mockProducts.map(product => (
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
