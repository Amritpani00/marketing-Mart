import React from 'react';
import Banner from './Banner';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import SeasonalProductList from './SeasonalProductList';

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
            <hr />
            <SeasonalProductList />
        </div>
    );
};

export default Home;
