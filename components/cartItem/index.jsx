import React, { useContext } from 'react';
import style from '../style/style.module.css'
// import { useMyContext } from '../layout';
import DataContext  from '../context/DataContext';



export default function CartItem({ item }) {
  // const { cartList, setCartList } = useMyContext();
  const { cartList, setCartList} = useContext(DataContext);
  const { id, name, price, emoji } = item.item;


  const handleDeleteItem = () => {
    setCartList((prevCartList) => {
      const { [id]: deletedItem, ...rest } = prevCartList;
      return rest;
    });
  };



  const handleAmountPlus = () => {
    setCartList((prevCartList) => ({
      ...prevCartList,
      [id]: {
        ...prevCartList[id],
        amount: cartList[id].amount + 1,
      },
    }));
    console.log(item);

  };

  const handleAmountMinus = () => {
    if (cartList[id].amount == 1) {
      handleDeleteItem()
      return
    }
    if (cartList[id].amount > 1) {
      setCartList((prevCartList) => ({
        ...prevCartList,
        [id]: {
          ...prevCartList[id],
          amount: cartList[id].amount - 1,
        },
      }));
    }
    console.log(item);
  };




  return (
    <div className={style.cartItem}>

      <span>{name}</span>
      <h2>{price}</h2>
      {/* <h3>{emoji}</h3> */}
       
       <div className={style.buttons}>
      <button onClick={handleAmountPlus}>+</button>
      <span>{item.amount}</span>
      <button onClick={handleAmountMinus}>-</button>
      
      </div>
      <button onClick={handleDeleteItem}>X</button>
      <div>{parseFloat(item.amount*price.toFixed(2))}</div>

    </div>
  )

}
