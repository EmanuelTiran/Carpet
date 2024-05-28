
"use client"
import React, { useState, useEffect } from 'react';
import style from './style.module.css';
import Cookies  from 'js-cookie';


const CartBadge = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const cart = Cookies.get("cart");
    // console.log(cert);
    // const cart2 = document.cookies.getItem('cart');
    if (cart) {
      let itemCount = 0;
      const parsedCart = JSON.parse(cart);
      for (const productId in parsedCart) {
        itemCount += parsedCart[productId].quantity;
      }
      setCartItemCount(itemCount);
    } else {
      setCartItemCount(0);
    }
  }, []);

  return (
    <div className={style.cartBadge}>
      <span className={style.cartIcon} >🛒</span>
      <span className={style.badgeCount}>{cartItemCount}</span>
    </div>
  );
};

export default CartBadge;
