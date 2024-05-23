import HotelForm from '@/components/CarpetForm'
import { readCarpetsService, createCarpetService } from '@/server/BL/services/carpet.service'
import { connectToMongo } from '@/server/connectToMongo'
import { unstable_noStore } from 'next/cache'
import Image from 'next/image'
import Link from 'next/link'
import style from './style.module.css'
import Images from '@/components/Images'

export default async function Home() {
  // unstable_noStore()
  // await new Promise(resolve => setTimeout(resolve, 7000))
  await connectToMongo()

  const carpets = await readCarpetsService();
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
        {carpets.map((carpet) => (
          <Link className={style.link} key={carpet._id} href={`/${carpet.slug}`} >
            <Image src={carpet.image[0]} alt={carpet.title} width={700} height={475} />
            <h1 className={style.name}> {carpet.name} </h1>
            <p className={style.description}>
              {carpet.description}
            </p>
          </Link>
        ))}
      </section>
      <HotelForm />

    </div>
  )
}
