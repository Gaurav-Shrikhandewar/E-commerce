import React from 'react';

function ShoppingCart(props) {
    const { items } = props;

    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name} - ${item.price}</li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingCart;
