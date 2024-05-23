"use server"

import { connectToMongo } from "@/server/connectToMongo"
import { createCarpetService } from "../services/carpet.service"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export const createCarpetAction = async (fd) => {
   const body = Object.fromEntries(fd)

   try {
      await connectToMongo()
      await createCarpetService(body)
      revalidatePath('/carpet')
   } catch (error) {
      console.log({ error });
   }
   redirect('/')
} 