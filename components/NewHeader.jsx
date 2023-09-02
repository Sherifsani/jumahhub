import React from "react";
import Image from "next/image";
import { Staatliches } from "next/font/google";
import { Manrope } from "next/font/google";

const staatliches = Staatliches({ subsets: ["latin"], weight: "400" });
const manrope = Manrope({ subsets: ["latin"], weight: "400" });

const NewHeader = () => {
  return (
    <div className="home w-screen h-screen overflow-hidden bg-black flex items-center justify-center flex-col sm:gap-10">
      <div className="w-full max-w-5xl mx-auto flex flex-col p-7 ">
        <Image
          src="/assets/logo1.png"
          alt="logo"
          width={1000}
          height={1000}
          className="w-[100%]"
        />
        <h1
          className={`${staatliches.className} text-white w-full text-[1.3rem] sm:text-[3rem] text-center`}
        >
          IF YOU CAN THINK IT, WE CAN CREATE IT
        </h1>
      </div>
      <nav className="w-full">
        <ul
          className={`${manrope.className} flex flex-col sm:flex-row items-center gap-3 sm:gap-8 justify-center w-full`}
        >
          <li className="text-white font-bold sm:text-lg cursor-pointer">
            Portfolio
          </li>
          <li className="text-white font-bold sm:text-lg cursor-pointer">
            Services
          </li>
          <li className="text-white font-bold sm:text-lg cursor-pointer">
            <a
              className="text-white font-bold sm:text-lg cursor-pointer"
              href="#footer"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NewHeader;
