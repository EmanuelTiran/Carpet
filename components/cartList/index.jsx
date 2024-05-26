import React, { useContext } from 'react';
import CartItem from '../cartItem';
import style from '../style/style.module.css'
import DataContext from '../context/DataContext';

export default function CartLIst() {
    const { cartList} = useContext(DataContext);


    return (
        <div className={style.cartList}>
            {Object.values(cartList).map(
                (item) => (
                    <CartItem key={item.item.id} item={item} />
                )
            )}
        </div>
    )

}
