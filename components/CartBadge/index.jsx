"use client"
import { useCart } from '../../context/CartContext';
import style from './style.module.css';

const CartBadge = () => {
  const { cartItemCount } = useCart();

  return (
    <div className={style.cartBadge}>
      <span className={style.cartIcon}>🛒</span>
      <span className={style.badgeCount}>{cartItemCount}</span>
    </div>
  );
};

export default CartBadge;




// "use client"
// import React, { useState, useEffect, useRef } from 'react';
// import Cookies from 'js-cookie';

// import style from './style.module.css';

// const CartBadge = () => {


// const [cartItemCount, setCartItemCount] = useState(0);
//  const previousCartItemCountRef = useRef(0);
// useEffect(() => {
//   const cart = Cookies.get('cart');
//   if (cart) {
//     let itemCount = 0;
//     const parsedCart = JSON.parse(cart);
//     for (const productId in parsedCart) {
//       itemCount += parsedCart[productId].quantity;
//     }
//     setCartItemCount(itemCount);

//     // Check if cart item count has changed
//     if (itemCount !== previousCartItemCountRef.current) {
//       // Trigger re-render if count has changed
//       previousCartItemCountRef.current = itemCount;
//       setCartItemCount(itemCount + 1); // Force re-render
//       setCartItemCount(itemCount); // Set the actual count
//     }
//   } else {
//     setCartItemCount(0);
//   }
// }, []);


//   return (
//     <div className={style.cartBadge}>
//       <span className={style.cartIcon}>🛒</span>
//       <span className={style.badgeCount}>{cartItemCount}</span>
//     </div>
//   );
// };

// export default CartBadge;

