import React, { useState } from 'react';

const OrderTracking = () => {
    const [orders, setOrders] = useState([
        { id: 1, status: 'Shipped', items: ['Apples', 'Milk'] },
        { id: 2, status: 'Processing', items: ['Bread'] },
    ]);

    return (
        <div>
            <h2>Order Tracking</h2>
            {orders.map(order => (
                <div key={order.id} className="order-card">
                    <h3>Order #{order.id}</h3>
                    <p>Status: {order.status}</p>
                    <p>Items: {order.items.join(', ')}</p>
                </div>
            ))}
        </div>
    );
};

export default OrderTracking;
