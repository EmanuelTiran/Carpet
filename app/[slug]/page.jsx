import { readCarpetsService, readCarpetByFieldService } from '@/server/BL/services/product.service'
import { connectToMongo } from '@/server/connectToMongo'
import style from './style.module.css'
import Images from '@/components/Images'
import { readProductByFieldService } from '@/server/BL/services/product.service'
import AddToCartBtn from '@/components/AddToCartBtn'
import Link from 'next/link'

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
        <Images product={product} className={style.img} />
        <span className={style.details}>
           <h2>{product.name}</h2>
           <p className={style.description}>{product.description}</p>
           <p className={style.price}>Price: {product.price}</p>
           <Link href="/"><button className={style.button}>Back to home</button></Link>
        </span>
        <AddToCartBtn productId={product.id}/>
     </div>
   </div> : 
     <h1>Not found</h1>
   }
     </>
   )
}






// import { readCarpetsService, readCarpetByFieldService } from '@/server/BL/services/product.service'
// import { connectToMongo } from '@/server/connectToMongo'

// import style from './style.module.css'
// import Images from '@/components/Images'
// import { readProductByFieldService } from '@/server/BL/services/product.service'
// import AddToCartBtn from '@/components/AddToCartBtn'
// import Link from 'next/link'
// import { Carpet } from '@/server/DL/models/product.model'


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
