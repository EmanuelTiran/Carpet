
import { connectToMongo } from '@/server/connectToMongo'
import style from './style.module.css'
import Images from '@/components/Images'
import { readProductByFieldService } from '@/server/BL/services/product.service'
import AddToCartBtn from '@/components/AddToCartBtn'
import Link from 'next/link'
import Image from 'next/image'

export default async function page({ params: { slug } }) {
   await connectToMongo()
   let product = await readProductByFieldService({ slug: slug })
   if(product){
      product = {...product._doc, _id: product._id.toString()}
   }
   // console.log("🚀 ~ page ~ product:", product)

   return (
     <>
     {product ? 
     <div className={style.container} >
     <div className={style.productDetails}>
     <span className={style.sale}>
      <span className={style.sale2}>
         <Image src='/img/sale_icon2.png' alt={'background picture'} width={90} height={1} className={style.bckPic} />
         </span>
        <Images product={product} className={style.img} />
        </span>
        <span className={style.details}>
           <h2>{product.name}</h2>
           <p className={style.description}>{product.description}</p>
           <p className={style.price}>Price: {product.price}</p>
           <Link href="/"><button className={style.button}>Back to home</button></Link>
           <p className={style.price}>In stock: {product.inStock}</p>
        </span>
        <AddToCartBtn productId={product.id}/>
     </div>
   </div> : 
     <h1>Not found</h1>
   }
     </>
   )
}






// import { connectToMongo } from '@/server/connectToMongo'

// import style from './style.module.css'
// import Images from '@/components/Images'
// import { readProductByFieldService } from '@/server/BL/services/product.service'
// import AddToCartBtn from '@/components/AddToCartBtn'
// import Link from 'next/link'



// // export async function generateStaticParams() {
// //    await connectToMongo()
// //    const all = await readProductsService();
// //    return all.map((product) => ({ slug: product.slug }))
// // }

// export default async function page({ params: { slug } }) {
//    await connectToMongo()
//    const product = await readProductByFieldService({ slug: slug })
//    console.log(product, "▶️▶️▶️▶️▶️▶️▶️▶️");

//    return (
//       <div className={style.container} >
//          <div className={style.productDetails}>
            
//             <Images product={product.toObject()} className={style.img} />
//             <span className={style.details}>
//                <h2>{product.name}</h2>
//                <p className={style.description}>{product.description}</p>
//                <p className={style.price}>Price: {product.price}</p>
//                <Link href="/"><button className={style.button}>Back to home</button></Link>
//             </span>
//             <AddToCartBtn productId={product.id}/>
//          </div>
//       </div>
//    )
// }
