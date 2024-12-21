import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Navbar.css';

function Navbar() {
    const { cart } = useContext(CartContext);

    return (
        <nav className="navbar">
            <div className="logo">
                <h1>Foodie</h1>
            </div>
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/menu" className="nav-link">Menu</Link>
                <Link to="/cart" className="nav-link cart-link">
                    Cart ({cart.length})
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
