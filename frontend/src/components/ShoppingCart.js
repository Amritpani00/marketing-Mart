import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ShoppingCart = () => {
    const { cartItems } = useContext(CartContext);

    const getTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <span>{item.name}</span>
                            <span>{item.quantity} x ${item.price}</span>
                        </div>
                    ))}
                    <h3>Total: ${getTotal()}</h3>
                    <button>Checkout</button>
                </div>
            )}
        </div>
    );
};

export default ShoppingCart;
