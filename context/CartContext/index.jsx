'use client';
import { createContext, useContext, useState, useEffect, useRef } from 'react';
import Cookies from 'js-cookie';
const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(getInitialCart());
  const [cartItemCount, setCartItemCount] = useState(0);
  // const previousCartItemCountRef = useRef(0)

  const updateCart = (newCart) => {
    setCart(newCart);
    Cookies.set('cart', JSON.stringify(newCart));
  };

  // מעדכן כמות
  useEffect(() => {
    if (cart) {
      let itemsCount = 0;
      for (const productId in cart) {
        itemsCount += cart[productId].quantity;
      }
      setCartItemCount(itemsCount);
    } else {
      setCartItemCount(0);
    }
  }, [cart]);


  //  // מעדכן כמות
  //  useEffect(() => {
  //   // const cart = Cookies.get('cart');
  //   if (cart) {
  //     let itemCount = 0;
  //     // const parsedCart = JSON.parse(cart);
  //     for (const productId in cart) {
  //       itemCount += cart[productId].quantity;
  //     }
  //     setCartItemCount(itemCount);
  //     if (itemCount !== previousCartItemCountRef.current) {
  //       // Trigger re-render if count has changed
  //       previousCartItemCountRef.current = itemCount;
  //       setCartItemCount(itemCount + 1); // Force re-render
  //       setCartItemCount(itemCount); // Set the actual count
  //     }
  //   } else {
  //     setCartItemCount(0);
  //   }
  // }, [cart]);


  return (
    <CartContext.Provider value={{ cart, updateCart, cartItemCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}


const getInitialCart = () => {
  const cart = Cookies.get('cart');
  if (cart) {
    return JSON.parse(cart)
  }
  return {};
}
const getInitialCounter = () => {
  let cart = Cookies.get('cart');
  let itemsCount = 0;
  if (cart) {
    cart = JSON.parse(cart);
    for (const productId in cart) {
      itemsCount += cart[productId].quantity;
    }
  }
  return itemsCount;
}

