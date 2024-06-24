import mongoose, { connect } from "mongoose";

export const connectToMongo = async () => {
   try {
      if (mongoose.connection.readyState === 1) {
         console.log('already connected');
         console.log("🚀 ~ status🎖️:")
         return { isConnected: true, message: "OK" };

      }
      await connect(process.env.MONGO_URI)
      console.log('🎖️ connected to mongo');
      return { isConnected: true, message: "OK" };
   } catch (error) {
      console.log('📵 error connect to mongo', error);
      return { isConnected: false, message: "📵 Network connection error" }
   }
}