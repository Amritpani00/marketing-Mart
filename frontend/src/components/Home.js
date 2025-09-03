import React from 'react';
import Banner from './Banner';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="products-container">
                    <ProductList />
                </div>
                <div className="cart-container">
                    <ShoppingCart />
                </div>
            </div>
        </div>
    );
};

export default Home;
