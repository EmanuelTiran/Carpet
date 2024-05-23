// import Header from '../../components/Header'

import { readCarpetsService } from "@/server/BL/services/carpet.service";
import { createCarpet } from "@/server/DL/controllers/carpet.controller";
import { connectToMongo } from "@/server/connectToMongo";

export const metadata = { title: "About" };
const carpets = [
   {
       "name": "Soft Shaggy Rug",
       "Material": "Polyester",
       "size": "5' x 7'",
       "color": "Beige",
       "price": 120,
       "quantity": 1,
       "description": "Luxurious shaggy rug for a cozy feel",
       "image": "https://www.carpetim.co.il/wp-content/uploads/2023/08/2-1930_optimized-300x300.jpg",
       "slug": "soft-shaggy-rug14535435"
   },
   {
       "name": "Vintage Oriental Carpet",
       "Material": "Wool",
       "size": "8' x 10'",
       "color": "Blue",
       "price": 280,
       "quantity": 1,
       "description": "Elegant vintage oriental carpet with intricate patterns",
       "image": "https://www.carpetim.co.il/wp-content/uploads/2023/11/8251-vIzon-1_optimized-300x300.jpg.webp",
       "slug": "vintage-oriental-carpet23454"
   },
   {
       "name": "Modern Geometric Rug",
       "Material": "Cotton",
       "size": "6' x 9'",
       "color": "Gray",
       "price": 150,
       "quantity": 1,
       "description": "Contemporary geometric rug for a stylish look",
       "image": "https://www.carpetim.co.il/wp-content/uploads/2023/08/3175_optimized-300x300.jpg.webp",
       "slug": "modern-geometric-rug3543453"
   },
   {
       "name": "Bohemian Tassel Rug",
       "Material": "Jute",
       "size": "4' x 6'",
       "color": "Multi-color",
       "price": 90,
       "quantity": 1,
       "description": "Bohemian style rug with tassel details",
       "image": "https://www.carpetim.co.il/wp-content/uploads/2023/08/8206_optimized-300x300.jpg.webp",
       "slug": "bohemian-tassel-rug4646544"
   },
   {
       "name": "Striped Flatweave Rug",
       "Material": "Polypropylene",
       "size": "9' x 12'",
       "color": "Black/White",
       "price": 200,
       "quantity": 1,
       "description": "Classic striped flatweave rug for a timeless look",
       "image": "https://www.carpetim.co.il/wp-content/uploads/2023/08/3136_optimized-300x300.jpg.webp",
       "slug": "striped-flatweave-rug64645"
   },
   {
       "name": "Moroccan Diamond Rug",
       "Material": "Polyester",
       "size": "5' x 8'",
       "color": "Cream",
       "price": 110,
       "quantity": 1,
       "description": "Moroccan-inspired diamond pattern rug",
       "image": "/images/moroccan_diamond_rug.jpg",
       "slug": "moroccan-diamond-rug6654"
   },
   {
       "name": "Faux Fur Area Rug",
       "Material": "Acrylic",
       "size": "3' x 5'",
       "color": "White",
       "price": 70,
       "quantity": 1,
       "description": "Soft and plush faux fur area rug",
       "image": "https://www.carpetim.co.il/wp-content/uploads/2023/08/3162_optimized-300x300.jpg.webp",
       "slug": "faux-fur-area-rugכעגדעכג7"
   }
];

export default async function About() {
await connectToMongo();
// const carpetCreate = await createCarpet(carpets.map (i => ({...i})))
// const carpetModel = await readCarpetsService()

return (
      <div className='font-semibold'>
         about
      </div>
   )
}
