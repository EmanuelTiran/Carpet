
import { readProductsService } from '@/server/BL/services/product.service'
import { connectToMongo } from '@/server/connectToMongo'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function Page({ searchParams: { search } }) {
   await connectToMongo()
   const result = await readProductsService({
      $or: [{ title: { $regex: search, $options: 'i' } }, { description: { $regex: search, $options: 'i' } }]
   })

   return (
      <div>
         <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {result.map((Product) => (
               <Link className='flex flex-col' key={Product._id} href={`/airbnb/${Product._id}`} >
                  <Image src={Product.image} alt={Product.title} width={600} height={400} />
                  {Product.name}
               </Link>
            ))}
         </section>
      </div>
   )
}
