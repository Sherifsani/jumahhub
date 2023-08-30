import Image from "next/image";
import Link from "next/link";
import NewHeader from "@/components/NewHeader";
import Herotext from "@/components/Herotext";
import GallerySection from "@/components/GallerySection";
// import Header from "@/components/Header";
import CardSect from "@/components/cardSect";
import NewSect from "@/components/NewSect";

export default function Home() {
  return (
    <main
      className="

     my-0 mx-auto"
    >
      {/* <Header /> */}
      <NewHeader />
      <Herotext />
      <GallerySection />
      {/* <CardSect /> */}
      <div className="w-full bg-black">
        <NewSect />
      </div>
    </main>
  );
}
