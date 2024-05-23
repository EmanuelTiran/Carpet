import HotelForm from '@/components/CarpetForm'
import { readCarpetsService, createCarpetService } from '@/server/BL/services/carpet.service'
import { connectToMongo } from '@/server/connectToMongo'
import { unstable_noStore } from 'next/cache'
import Image from 'next/image'
import Link from 'next/link'
import style from './style.module.css'
import Images from '@/components/Images'
import { createProduct } from '@/server/DL/controllers/product.controller'
import { readProductsService } from '@/server/BL/services/product.service'
const carpetsJson = [
  {
    name: 'Faux Fur Area Rug',
    slug: 'faux-fur-area-rug',
    size: "3' x 5'",
    color: 'White',
    price: 70,
    discoount: 0,
    inStock: 35,
    category: "carpet",

    description: 'Soft and plush faux fur area rug',
    images: ["https://www.carpetim.co.il/wp-content/uploads/2020/03/%D7%91%D7%9E%D7%91%D7%95-2153-300x300.jpg.webp",
      'https://www.carpetim.co.il/wp-content/uploads/2020/03/%D7%93%D7%92%D7%9D-%D7%A1%D7%A0%D7%98%D7%99%D7%99%D7%92%D7%95-300x300.jpg.webp',
      'https://www.carpetim.co.il/wp-content/uploads/2020/03/WhatsApp-Image-2023-04-30-at-22.08.41-300x300.jpeg.webp'
    ],
    __v: 0
  },
  {
    name: 'Vintage Oriental Carpet',
    slug: 'vintage-oriental-carpet',
    size: "8' x 10'",
    color: 'Blue',
    price: 280,
    discoount: 0,
    inStock: 35,
    category: "carpet",

    description: 'Elegant vintage oriental carpet with intricate patterns',
    images: ['https://www.carpetim.co.il/wp-content/uploads/2020/02/%D7%90%D7%95%D7%98%D7%A0%D7%98%D7%99%D7%A7-1911-300x300.jpg.webp',
      'https://www.carpetim.co.il/wp-content/uploads/2020/01/%D7%90%D7%95%D7%98%D7%A0%D7%98%D7%99%D7%A7-1911-150x150.jpg.webp',
      'https://www.carpetim.co.il/wp-content/uploads/2020/02/1911_optimized-600x600.jpg.webp'],
    __v: 0
  },
  {
    name: 'Soft Shaggy Rug',
    slug: 'soft-shaggy-rug',
    size: "5' x 7'",
    color: 'Black',
    price: 120,
    discoount: 0,
    inStock: 35,
    category: "carpet",

    description: 'Luxurious shaggy rug for a cozy feel',
    images: ['https://www.carpetim.co.il/wp-content/uploads/2021/02/2210-300x300.jpg',
      'https://www.carpetim.co.il/wp-content/uploads/2021/02/WhatsApp-Image-2022-07-14-at-15.59.18-1-300x300.jpeg.webp',
      'https://www.carpetim.co.il/wp-content/uploads/2021/02/WhatsApp-Image-2022-09-18-at-13.53.48-Copy-300x300.jpeg.webp'
    ],
    __v: 0
  },
  {
    name: 'Moroccan Diamond Rug',
    slug: 'moroccan-diamond-rug',
    size: "5' x 8'",
    color: 'Ping&LightBlue',
    price: 110,
    discoount: 0,
    inStock: 35,
    category: "carpet",

    description: 'Moroccan-inspired diamond pattern rug',
    images: ['https://www.carpetim.co.il/wp-content/uploads/2020/02/%D7%90%D7%95%D7%98%D7%A0%D7%98%D7%99%D7%A7-990-300x300.jpg.webp',
      'https://www.carpetim.co.il/wp-content/uploads/2020/02/92579631_10157318439648727_5132630281160753152_o-300x300.jpg.webp',
      'https://www.carpetim.co.il/wp-content/uploads/2020/02/whatsapp-image-2022-06-13-at-10_optimized.29.59-300x300.jpeg.webp'
    ],
    __v: 0
  },
  {
    name: 'Modern Geometric Rug',
    slug: 'modern-geometric-rug',
    size: "6' x 9'",
    color: 'Gray&Beige',
    price: 150,
    discoount: 0,
    inStock: 35,
    category: "carpet",

    description: 'Contemporary geometric rug for a stylish look',
    images:
      ['https://www.carpetim.co.il/wp-content/uploads/2020/03/%D7%A4%D7%99%D7%A8%D7%99%D7%9C%D7%98%D7%99-2025-300x300.jpg.webp',
        'https://www.carpetim.co.il/wp-content/uploads/2020/03/whatsapp-image-2023-06-15-at-10_optimized.59.35-300x300.jpeg.webp',
        'https://www.carpetim.co.il/wp-content/uploads/2020/03/whatsapp-image-2023-06-15-at-10_optimized.59.35-300x300.jpeg.webp'
      ],
    __v: 0
  },
  {
    name: 'Striped Flatweave Rug',
    slug: 'striped-flatweave-rug',
    size: "9' x 12'",
    color: 'Fire',
    price: 200,
    discoount: 0,
    inStock: 35,
    category: "carpet",

    description: 'Classic striped flatweave rug for a timeless look',
    images: ['https://www.carpetim.co.il/wp-content/uploads/2020/02/%D7%90%D7%95%D7%98%D7%A0%D7%98%D7%99%D7%A7-1922-300x300.jpg.webp',
      'https://www.carpetim.co.il/wp-content/uploads/2020/02/%D7%A1%D7%95%D7%9C-1-300x300.jpeg.webp',
      'https://www.carpetim.co.il/wp-content/uploads/2020/02/%D7%A1%D7%95%D7%9C-2-300x300.jpeg.webp'
    ],
    __v: 0
  },
  {
    name: 'Bohemian Tassel Rug',
    slug: 'bohemian-tassel-rug',
    size: "4' x 6'",
    color: 'Multi-color',
    price: 90,
    discoount: 0,
    inStock: 35,
    category: "carpet",

    description: 'Bohemian style rug with tassel details',
    images: ['https://www.carpetim.co.il/wp-content/uploads/2022/07/2-1858-2-300x300.jpg',
      'https://www.carpetim.co.il/wp-content/uploads/2022/07/%D7%A8%D7%99%D7%A3-1-600x600.jpeg.webp',
      'https://www.carpetim.co.il/wp-content/uploads/2022/07/%D7%A8%D7%99%D7%A3-2-600x600.jpeg.webp'
    ],
    __v: 0
  }
]
export default async function Home() {
  // unstable_noStore()
  // await new Promise(resolve => setTimeout(resolve, 7000))
  await connectToMongo()
  // createProduct(carpetsJson.map((carpet, i)=>({ ...carpet})))

  const carpets = await readProductsService({ category: "carpet" });
  // const carpets = await readCarpetsService();
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
            <Image src={carpet.images[0]} alt={carpet.title} width={700} height={475} />
            <h1 className={style.name}> {carpet.name} </h1>
            <p className={style.description}>
              {carpet.description}
            </p>
          </Link>
        ))}
      </section>
    </div>
  )
}
