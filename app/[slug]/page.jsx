import { readCarpetsService, readCarpetByFieldService } from '@/server/BL/services/carpet.service'
import { connectToMongo } from '@/server/connectToMongo'

import style from './style.module.css'
import Images from '@/components/Images'
import { readProductByFieldService } from '@/server/BL/services/product.service'
import AddToCartBtn from '@/components/AddToCartBtn'
import Link from 'next/link'
import { Carpet } from '@/server/DL/models/carpet.model'

export default async function page({ params: { slug } }) {
   await connectToMongo()
   const carpet = await readProductByFieldService({ slug: slug })
    const carpetObject  = carpet;
   carpetObject._id = carpetObject._id.toString();
   // const carpetObject = carpet.toObject(); // המרה לאובייקט פשוט

   return (
      <div className={style.container} >
         <div className={style.detailCarpet}>
            
            <Images carpet={carpetObject} className={style.img} />
            <span className={style.details}>
               <h2>{carpetObject.name}</h2>
               <p className={style.description}>{carpetObject.description}</p>
               <p className={style.price}>Price: {carpetObject.price}</p>
               <Link href="/"><button className={style.button}>Back to home</button></Link>
            </span>
            <AddToCartBtn productId={carpetObject.id}/>
         </div>
      </div>
   )
}






// import { readCarpetsService, readCarpetByFieldService } from '@/server/BL/services/carpet.service'
// import { connectToMongo } from '@/server/connectToMongo'

// import style from './style.module.css'
// import Images from '@/components/Images'
// import { readProductByFieldService } from '@/server/BL/services/product.service'
// import AddToCartBtn from '@/components/AddToCartBtn'
// import Link from 'next/link'
// import { Carpet } from '@/server/DL/models/carpet.model'


// // export async function generateStaticParams() {
// //    await connectToMongo()
// //    const all = await readProductsService();
// //    return all.map((carpet) => ({ slug: carpet.slug }))
// // }

// export default async function page({ params: { slug } }) {
//    await connectToMongo()
//    const carpet = await readProductByFieldService({ slug: slug })
//    console.log(carpet, "▶️▶️▶️▶️▶️▶️▶️▶️");

//    return (
//       <div className={style.container} >
//          <div className={style.detailCarpet}>
            
//             <Images carpet={carpet.toObject()} className={style.img} />
//             <span className={style.details}>
//                <h2>{carpet.name}</h2>
//                <p className={style.description}>{carpet.description}</p>
//                <p className={style.price}>Price: {carpet.price}</p>
//                <Link href="/"><button className={style.button}>Back to home</button></Link>
//             </span>
//             <AddToCartBtn productId={carpet.id}/>
//          </div>
//       </div>
//    )
// }
