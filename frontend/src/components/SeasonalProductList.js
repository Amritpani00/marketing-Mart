import React, { useState, useEffect } from 'react';

const mockSeasonalProducts = [
    {
        id: 's1',
        name: 'Pumpkin Spice Coffee',
        description: 'Limited edition for the fall season.',
        price: 12.99,
        imageUrl: 'https://images.unsplash.com/photo-1634902334051-59e3f1b4a1bf?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'Seasonal'
    },
    {
        id: 's2',
        name: 'Christmas Cookie Box',
        description: 'A festive assortment of holiday cookies.',
        price: 19.99,
        imageUrl: 'https://images.unsplash.com/photo-1512223792613-68a7c1584c33?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'Festival'
    },
    {
        id: 's3',
        name: 'Fresh Cranberries',
        description: 'Perfect for your holiday recipes.',
        price: 4.50,
        imageUrl: 'https://images.unsplash.com/photo-1542911249-05248a3538e1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'Seasonal'
    }
];

const SeasonalProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // In the future, this would be an API call:
        // fetch('/api/products?category=seasonal')
        //     .then(response => response.json())
        //     .then(data => {
        //         setProducts(data);
        //         setLoading(false);
        //     })
        //     .catch(error => {
        //         setError(error);
        //         setLoading(false);
        //     });

        // For now, we use mocked data
        setProducts(mockSeasonalProducts);
        setLoading(false);
    }, []);

    if (loading) return <div>Loading Seasonal Items...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="seasonal-products-container">
            <h2>Festival & Seasonal Specials</h2>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.imageUrl || 'https://via.placeholder.com/150'} alt={product.name} style={{width: '100%'}}/>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SeasonalProductList;
