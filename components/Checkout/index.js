"use client"

import { useEffect, useState } from "react";
import style from "./style.module.css"
import { createOrderAction } from "@/server/BL/actions/order.action"


export default function Checkout() {

    const [cart, setCart] = useState([]);
    const [totalCost, setTotalCost] = useState(288);

    useEffect(() => {
        function getCartProductsForCheckout() {
            const cartData = localStorage.getItem('cart');
            if (!cartData) {
              return []; // Return empty array if cart is empty
            }
            const parsedCart = JSON.parse(cartData);
            const products = [];
          
            for (const productId in parsedCart) {
              const quantity = parsedCart[productId].quantity;
          
              products.push({
                productId: productId, // Assuming product IDs are valid ObjectIds
                quantity,
              });
            }
            console.log(products)
            return products;
          }
          setCart(getCartProductsForCheckout())
          console.log(cart)
          
    }, []);





    return (
        <div className={`${style.container} container mx-auto p-4`}>
            <h1 className="text-2xl font-bold mb-4">New Order</h1>

            <div>
                <label className="block text-sm font-medium text-gray-700">CustomerId</label>

                <input type="text" readOnly
                    //    className="hidden"
                    name='customerId' value={'66509743c542c7a47f8ba955'} />
            </div>

            <form action={createOrderAction} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Product</label>

                    <input type="text" readOnly
                        name='productId' value="66509743c542c7a47f8ba955" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Product</label>

                    <input type="text" readOnly
                        name='products' value={JSON.stringify(cart)} />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Quantity</label>
                    <input type="number" readOnly
                        name='quantity' value={2}/>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Total</label>
                    <input type="number" readOnly
                        //    className="hidden"
                        name='total' value={totalCost} />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Full name</label>
                    <input
                        type="text"
                        name='name'
                        placeholder="Full name"
                        className={`mt-1 block w-full  rounded-md shadow-sm`}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name='email'
                        placeholder="Email"
                        className={`mt-1 block w-full rounded-md shadow-sm`}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                        type="number"
                        name='phone'
                        className={`mt-1 block w-full  rounded-md shadow-sm`}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Street</label>
                    <input
                        type="text"
                        name='street'
                        className={`mt-1 block w-full  rounded-md shadow-sm`}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">House number</label>
                    <input
                        type="number"
                        name='houseNumber'
                        className={`mt-1 block w-full  rounded-md shadow-sm`}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">City</label>
                    <input
                        type="text"
                        name='city'
                        className={`mt-1 block w-full  rounded-md shadow-sm`}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">State</label>
                    <input
                        type="text"
                        name='state'
                        className={`mt-1 block w-full  rounded-md shadow-sm`}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">zipCode</label>
                    <input
                        type="number"
                        name='zipCode'
                        className={`mt-1 block w-full  rounded-md shadow-sm`}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Notes</label>
                    <textarea
                        name='notes'
                        className={`mt-1 block w-full rounded-md shadow-sm`}
                    ></textarea>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600"
                    >
                        Order
                    </button>
                </div>
            </form>
        </div>
    )
}
