import ProductsForm from '@/components/ProductsForm'
import React from 'react'
import { cookies } from 'next/headers'
import { authAction } from '@/server/BL/actions/login.action';
import OrderList from '@/components/OrderList';
import style from "./style.module.css"

export default async function Dashboard() {
  // const cookieStore = cookies()
const isAdmin =  await authAction();
console.log(isAdmin);
  return (
  <>
   {isAdmin?
   
   <span className={style.container}>
   <ProductsForm />
   <OrderList/>
   </span>
   
   :<h1>no exist!!!</h1>} 
  </>
  )
}
