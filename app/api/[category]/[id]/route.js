import { NextResponse } from "next/server";


export const GET = async (req, { params }) => {
    console.log("🚀 ~ GET ~ searchParams📵📵📵📵📵📵📵📵📵📵:")
try {
   const body = await req.json();
   const { id } = params;
   const searchParams = Object.fromEntries(req.nextUrl.searchParams) 
   console.log("🚀 ~ GET ~ searchParams❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️:", searchParams)
      //query
   return NextResponse.json({ body, id, searchParams })
} catch (error) {
   console.log(error);
}
 }





//  export const GET = async () => {
//    try {
//       await connectToMongo()
//       const products = await readProductsService()
//       return NextResponse.json(products)
//    } catch (error) {
//       console.log(error);
//    }
// }