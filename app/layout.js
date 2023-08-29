import "./globals.css";
import { Manrope } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Staatliches } from "next/font/google";
import { Atkinson_Hyperlegible } from "next/font/google";
import Nav from "@/components/Nav";

import Header from "@/components/Header";

// const montserrat = Montserrat({ subsets: ["latin"] });
const atkin = Atkinson_Hyperlegible({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "JUMAHUB",
  description: "The best graphic design company you need",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={atkin.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
