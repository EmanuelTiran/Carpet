"use client"
import React, { useEffect, useState } from 'react';
import style from './style.module.css';

const AddToCartBtn = ({ productId }) => {
  const initialCart = localStorage.getItem('cart');
  const initialQuantity = initialCart && JSON.parse(initialCart)[productId]?.quantity || 0;
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    let parsedCart;
    if (cart) {
      parsedCart = JSON.parse(cart);
    } else {
      parsedCart = {}; // Initialize an empty cart object
    }

    if (quantity > 0) {
      parsedCart[productId] = { quantity };
    } else {
      // Remove the product from the cart if quantity is 0
      delete parsedCart[productId];
    }

    localStorage.setItem('cart', JSON.stringify(parsedCart));
  }, [quantity, productId]);

  return (
    <div className={style.container1}>
      <span className={style.container2}>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 0}>-</button>
      </span>
      <span className={style.container2}>
        <button onClick={() => setQuantity(0)}>Remove</button>
        <button onClick={() => setQuantity(quantity + 1)}>Add</button>
      </span>
    </div>
  );
};

export default AddToCartBtn;
