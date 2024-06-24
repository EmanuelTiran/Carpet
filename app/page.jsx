import { connectToMongo } from '@/server/connectToMongo'
import Image from 'next/image'
import Link from 'next/link'
import style from './style.module.css'
import { readProductsService } from '@/server/BL/services/product.service'
import { createDataBase } from '@/fillDB'

export default async function Home() {
  const status = await connectToMongo()
  // await createDataBase()
  let products;
  if (status.isConnected==true) {
    products = await readProductsService({ category: "carpet" });
  }


  return (
    <>
      {status.isConnected==true ? <div>
      
      <Image src='/img/background picture.jpg' alt={'background picture'} width={1620} height={1} className={style.bckPic} />
  
        <section className={style.section}>
          {products.map((product) => (
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
        </section>
      </div> :
        <h1>{status.message}</h1>
      }




    </>
  )
}
