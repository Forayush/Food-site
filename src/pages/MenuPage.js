import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './MenuPage.css';

const menuItems = [
    {
        id: 1,
        name: 'Pizza',
        description: 'Delicious cheesy pizza with your choice of toppings.',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1603052874108-19deab59bbbe', // Pizza Image
    },
    {
        id: 2,
        name: 'Burger',
        description: 'Juicy beef burger with fresh lettuce, tomato, and cheese.',
        price: 8.99,
        image: 'https://images.unsplash.com/photo-1603052874108-19deab59bbbe', // Burger Image
    },
    {
        id: 3,
        name: 'Pasta',
        description: 'Creamy pasta with a choice of marinara or alfredo sauce.',
        price: 10.99,
        image: 'https://images.unsplash.com/photo-1603052874108-19deab59bbbe', // Pasta Image
    },
    {
        id: 4,
        name: 'Dessert',
        description: 'Sweet and creamy chocolate cake for dessert lovers.',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1603052874108-19deab59bbbe', // Dessert Image
    },
    {
        id: 5,
        name: 'Salad',
        description: 'Fresh and healthy salad with seasonal vegetables.',
        price: 7.99,
        image: 'https://images.unsplash.com/photo-1603052874108-19deab59bbbe', // Salad Image
    },
];

function MenuPage() {
    const { addItem } = useContext(CartContext);

    return (
        <div className="menu-page">
            <h1>Our Menu</h1>
            <div className="menu-items">
                {menuItems.map((item) => (
                    <div key={item.id} className="menu-item">
                        <img 
                            src={item.image} 
                            alt={item.name} 
                            className="menu-item-image" 
                        />
                        <div className="menu-item-details">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p className="price">Price: ${item.price.toFixed(2)}</p>
                            <button 
                                className="menu-btn" 
                                onClick={() => addItem(item)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MenuPage;
