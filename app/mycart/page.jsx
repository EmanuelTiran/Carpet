import HotelForm from '@/components/CarpetForm'
import { readCarpetsService, createCarpetService } from '@/server/BL/services/carpet.service'
import { connectToMongo } from '@/server/connectToMongo'
import { unstable_noStore } from 'next/cache'
import Image from 'next/image'
import Link from 'next/link'
import style from './style.module.css'
import Images from '@/components/Images'
import CarpetForm from '@/components/CarpetForm'

export default async function Home() {
  unstable_noStore()
  await new Promise(resolve => setTimeout(resolve, 7000))
  await connectToMongo()


  return (
    <div>
      <CarpetForm />

    </div>
  )
}
