import { readOrdersService } from '@/server/BL/services/order.service';
import { connectToMongo } from '@/server/connectToMongo';
import React from 'react'
import style from "./style.module.css"

export default async function OrderList() {
    // unstable_noStore()

    await connectToMongo()
    const orderList = await readOrdersService({ status: "pending" });
    console.log({orderList});
    return (
        <div className={style.container}>
            {orderList.map((order) => (
                <span > 
                     <h1> {order._id} </h1>
                     <h2> {order.customerId} </h2>
                     <h2> {order.total} </h2>
                     <h2> {order.products[0]} </h2>
                     <h2> {order.Notes} </h2>
                     <h2> {order.isItPaid} </h2>
                     <h2> {order.orderDate.toLocaleString()} </h2>
                </span>
            ))}
        </div>
    )
}

