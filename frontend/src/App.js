import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import CheckoutForm from './components/CheckoutForm';
import OrderTracking from './components/OrderTracking';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import AuthContext from './context/AuthContext';
import './App.css';

function App() {
    const { currentUser, logout } = useContext(AuthContext);

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>Online Grocery Store</h1>
                    <nav>
                        <Link to="/">Home</Link>
                        {currentUser ? (
                            <>
                                <Link to="/checkout">Checkout</Link>
                                <Link to="/orders">My Orders</Link>
                                <a href="/login" onClick={logout}>Logout</a>
                            </>
                        ) : (
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </>
                        )}
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={
                            <div className="main-content">
                                <div className="products-container">
                                    <ProductList />
                                </div>
                                <div className="cart-container">
                                    <ShoppingCart />
                                </div>
                            </div>
                        } />
                        <Route path="/checkout" element={<ProtectedRoute><CheckoutForm /></ProtectedRoute>} />
                        <Route path="/orders" element={<ProtectedRoute><OrderTracking /></ProtectedRoute>} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
