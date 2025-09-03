import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import CheckoutForm from './components/CheckoutForm';
import OrderTracking from './components/OrderTracking';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Online Grocery Store</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/checkout">Checkout</Link>
            <Link to="/orders">My Orders</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="/orders" element={<OrderTracking />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
