import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="hero-section">
                <h1>Welcome to Our Food Haven</h1>
                <p>Your favorite meals served with love and care</p>
            </div>

            <div className="featured-section">
                <h2>Featured Dishes</h2>
                <div className="featured-items">
                    <div className="featured-item">
                        <img 
                            src="https://images.unsplash.com/photo-1603052874108-19deab59bbbe" 
                            alt="Pizza"
                            className="featured-item-image"
                        />
                        <h3>Pizza</h3>
                        <p>Cheesy, savory, and delicious!</p>
                    </div>
                    <div className="featured-item">
                        <img 
                            src="https://images.unsplash.com/photo-1603052874108-19deab59bbbe" 
                            alt="Burger"
                            className="featured-item-image"
                        />
                        <h3>Burger</h3>
                        <p>Juicy and loaded with toppings!</p>
                    </div>
                    <div className="featured-item">
                        <img 
                            src="https://images.unsplash.com/photo-1603052874108-19deab59bbbe" 
                            alt="Pasta"
                            className="featured-item-image"
                        />
                        <h3>Pasta</h3>
                        <p>Rich and creamy pasta to satisfy your cravings.</p>
                    </div>
                </div>
            </div>

            <div className="special-offer">
                <h2>Seasonal Offers</h2>
                <p>Enjoy exclusive seasonal discounts! Don't miss out on these tasty deals.</p>
                <button className="offer-btn">Check Out Offers</button>
            </div>
        </div>
    );
};

export default HomePage;
