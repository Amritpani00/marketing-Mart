import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const { addToCart } = useContext(CartContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch(`/api/products?page=${page}&size=9`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data.content);
                setTotalPages(data.totalPages);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        };

        fetchProducts();
    }, [page]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

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
            <div className="pagination-controls">
                <button onClick={() => setPage(page - 1)} disabled={page === 0}>
                    Previous
                </button>
                <span>Page {page + 1} of {totalPages}</span>
                <button onClick={() => setPage(page + 1)} disabled={page + 1 >= totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProductList;
