// "use server"
// import { useEffect, useState } from "react";
import style from "./style.module.css"
import { createOrderAction } from "@/server/BL/actions/order.action"
import OrderForm from "../OrderForm";
import CartDetails from "../CartDetails";
import { cookies } from "next/headers";
import { Logger } from "sass";
import { readProductsService } from "@/server/BL/services/product.service";

export default async function Checkout() {


    // const [cart, setCart] = useState([]);
    const cart =  getCartProductsForCheckout();
    // console.log("================",{cart});
    // const [totalCost, setTotalCost] = useState(288);
    const ids = cart.map(product =>  product.productId )
    // console.log({ ids });
    const detailsCarpets = await readProductsService({_id:{ $in: ids}})
    // const totalCost = detailsCarpets.map((carpet)=>carpet.price * );
    

    function getCartProductsForCheckout() {
                const cartData = cookies().get('cart');
                // console.log(cartData.value);
                // const cartData2 = localStorage.getItem('cart');
                if (!cartData.value) {
                    return [];
                }
                const parsedCart = JSON.parse(cartData.value);
                // const parsedCart = cartData.value;
                const products = [];
    
                for (const productId in parsedCart) {
                    const quantity = parsedCart[productId].quantity;
    
                    products.push({
                        productId: productId, // Assuming product IDs are valid ObjectIds
                        quantity,
                    });
                }
                return products;
            }

    // useEffect(() => {
    //     function getCartProductsForCheckout() {
    //         const cartData = cookies().getItem('cart');
    //         const cartData2 = localStorage.getItem('cart');
    //         if (!cartData) {
    //             return [];
    //         }
    //         const parsedCart = JSON.parse(cartData);
    //         const products = [];

    //         for (const productId in parsedCart) {
    //             const quantity = parsedCart[productId].quantity;

    //             products.push({
    //                 productId: productId, // Assuming product IDs are valid ObjectIds
    //                 quantity,
    //             });
    //         }
    //         console.log({products})
    //         return products;
    //     }
    //     setCart(getCartProductsForCheckout())
    //     console.log({ cart })
    // }, []);

    return (<>
        <CartDetails cart={cart} />
        <OrderForm cart={cart} totalCost={totalCost} />
    </>
    )
}
