import "./globals.css";
import { Manrope } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Staatliches } from "next/font/google";
import Footer from "@/components/Footer";
import NewHeader from "@/components/NewHeader";
import { Atkinson_Hyperlegible } from "next/font/google";
import Head from "next/head";

const atkin = Atkinson_Hyperlegible({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "JUMAHUB",
  description: "The best graphic design company you need",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="../public/assets/favicon.ico" />
      </Head>
      <body className={`${atkin.className} w-screen overflow-x-hidden`}>
        <NewHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
