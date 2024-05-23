import { readCarpetsService, readCarpetByFieldService } from '@/server/BL/services/carpet.service'
import { connectToMongo } from '@/server/connectToMongo'

import style from './style.module.css'
import Images from '@/components/Images'


export async function generateStaticParams() {
   await connectToMongo()
   const all = await readCarpetsService()
   return all.map((carpet) => ({ slug: carpet.slug }))
}

export default async function page({ params: { slug } }) {
   await connectToMongo()
   const carpet = await readCarpetByFieldService({ slug: slug })

   return (<div className={style.container} >

      <div className={style.detailCarpet}>
         <Images carpet={carpet} className={style.img} />
      </div>
   </div>
   )
}
