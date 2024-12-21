import React, { useContext } from 'react';
import './OrderPage.css';
import { CartContext } from '../context/CartContext';

function OrderPage() {
    const { cart, updateQuantity, removeItem, calculateTotal } = useContext(CartContext);

    return (
        <div className="order-page">
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty. Go to the <a href="/menu">menu</a> to add items!</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cart.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <div className="cart-item-details">
                                    <h3>{item.name}</h3>
                                    <p>Price: ${item.price.toFixed(2)}</p>
                                </div>
                                <div className="quantity-controls">
                                    <button
                                        className="quantity-button"
                                        onClick={() => updateQuantity(item.id, -1)}
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        className="quantity-button"
                                        onClick={() => updateQuantity(item.id, 1)}
                                    >
                                        +
                                    </button>
                                </div>
                                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                                <button
                                    className="remove-button"
                                    onClick={() => removeItem(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <h2>Order Summary</h2>
                        <p>Total Price: ${calculateTotal()}</p>
                        <button className="checkout-button">Proceed to Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default OrderPage;
