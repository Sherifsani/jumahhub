import React from "react";
import Link from "next/link";
import { Staatliches } from "next/font/google";
import { Manrope } from "next/font/google";

const staatliches = Staatliches({ subsets: ["latin"], weight: "400" });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "600", "700"] });

const Contact = () => {
  return (
    <section className="w-full grid place-items-center bg-black">
      <div
        className={`${manrope.className} w-full flex flex-col gap-7 pt-[100px] items-center max-w-[450px] px-6`}
      >
        <h1 className={`${staatliches.className} text-5xl font-bold text-white`}>
          READY TO SOAR?
        </h1>
        <p className="text-center text-white w-full  text-sm">
          Dive into the uncharted waters of JumaHub’s limitless design
          possibilities, and embark on an immersive journey where your ideas
          take flight. Every masterpiece starts with a single stroke, so why not
          let JumaHub guide your artistic voyage?
        </p>
        <div className="buttons flex flex-col gap-2 w-full">
          <button className="rounded-md w-full grid place-items-center py-3 bg-lightgreen">
            <Link href="/dashboard" className="text-black text-sm font-bold">
              Explore Our Services
            </Link>
          </button>
          <button className="rounded-md w-full grid place-items-center py-3 bg-white">
            <Link href="/dashboard" className="text-black text-sm font-bold">
              Contact Us
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
