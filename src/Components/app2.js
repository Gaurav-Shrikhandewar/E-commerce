import React, { useState } from 'react';
import ShoppingCart from './ShoppingCart';

const App2 = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    return (
        <div>
            <h1>My Online Store</h1>
            <button onClick={() => addToCart({ id: 1, name: 'Product 1 - Game', price: 100 })}>
                Add Game to Cart
            </button>
            <button onClick={() => addToCart({ id: 2, name: 'Product 2- Fan Gear', price: 200 })}>
                Add Fan gear to Cart
            </button>
            <ShoppingCart items={cartItems} />
        </div>
    );
}

export default App2;
