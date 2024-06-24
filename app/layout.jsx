import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { CartProvider } from "@/context/CartContext";
import { connectToMongo } from "@/server/connectToMongo";



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata = {
  title: "Cool-floor",
  description: "The largest site in Israel for carpets and parquets - the change starts from the bottom",
};


export default async function RootLayout({ children }) {
  // const status = await connectToMongo();

  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* {status.isConnected ? */}
          <CartProvider>
            <Header />

            {children}
          </CartProvider> 
         {/* : <h1>{status.message}</h1>}  */}
        
      </body>
    </html>
  );
}
