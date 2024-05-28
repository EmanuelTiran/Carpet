import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import style from "./style.module.css"
import {  readProductsService } from '@/server/BL/services/product.service';

export default async function CartDetails({ cart }) {
  // console.log(cart[0].productId);
  const ids = cart.map(product =>  product.productId )
  // console.log({ ids });
  const detailsCarpets = await readProductsService({_id:{ $in: ids}})
  
  return (
    <div className={style.contain}>
      {detailsCarpets.map((product) => (
          <span>
          <Link className={style.link} key={product._id} href={`/${product.slug}`} >
            <Image src={product.images[0]} alt={product.title} width={700} height={475} />
            <h1 className={style.name}> {product.name} </h1>
            <p className={style.description}>
              {product.description}
            </p>
          </Link>
         </span>
        ))}
    </div>
  )
}
