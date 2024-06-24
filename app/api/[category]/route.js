
import { readProductsService } from "@/server/BL/services/product.service";
import { connectToMongo } from "@/server/connectToMongo";
import { NextResponse } from "next/server";

export const GET = async () => {
   try {
      await connectToMongo()
      const products = await readProductsService()
      // console.log("🚀 ~ GET ~ searchParams❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️:")
      return NextResponse.json(products)
   } catch (error) {
      console.log(error);
   }
}

export const POST = async () => {

}

