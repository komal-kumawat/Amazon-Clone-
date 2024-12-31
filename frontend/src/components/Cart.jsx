import React, { useState } from 'react';

const Cart = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cart.map((item, index) => (
                <div key={index}>
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Cart;
