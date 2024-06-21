import { readCarpetsService, createCarpetService } from '@/server/BL/services/carpet.service'
import { connectToMongo } from '@/server/connectToMongo'
import { unstable_noStore } from 'next/cache'
import Image from 'next/image'
import Link from 'next/link'
import style from './style.module.css'
import Images from '@/components/Images'
import { createProduct } from '@/server/DL/controllers/product.controller'
import { readProductsService } from '@/server/BL/services/product.service'
import { createCustomerService } from '@/server/BL/services/customer.service'
import { createOrder } from '@/server/DL/controllers/order.controller'
import AddToCartBtn from '@/components/AddToCartBtn'
import { cookies } from 'next/headers'
import { saveCookie } from '@/server/BL/actions/carpet.action'
import { createDataBase } from '@/fillDB'

export default async function Home() {
  await connectToMongo()
  // await createDataBase()

  const carpets = await readProductsService({ category: "carpet" });
  const images = ['/img/logo carpet.jpg', '/img/background picture.jpg']
  const carpet = {
    title: "background",
    image: images
  }



  return (
    <div>
      {/* <Images carpet={carpet}  className={style.bckPi} /> */}

      <Image src='/img/background picture.jpg' alt={'background picture'} width={1920} height={400} className={style.bckPi} />
      <section className={style.section}>
        {carpets.map((product) => (
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
        {/* <form action={saveCookie}><button type="submit">asdfasdf</button></form> */}
        {/* <div>{JSON.stringify(cookiesss)}</div> */}
      </section>
    </div>
  
  )
}
