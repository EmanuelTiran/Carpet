import { readOrdersService } from '@/server/BL/services/order.service';
import { connectToMongo } from '@/server/connectToMongo';
import React from 'react'
import style from "./style.module.css"

export default async function OrderList() {
    // unstable_noStore()

    await connectToMongo()
    const orderList = await readOrdersService({ status: "pending" });
    return (
        <div className={style.container}>
            {orderList.map((order) => (
                <span > 
                     <h1> {order._id} </h1>
                </span>
            ))}
        </div>
    )
}

