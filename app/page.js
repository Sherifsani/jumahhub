import Image from "next/image";
import Link from "next/link";
import NewHeader from "@/components/NewHeader";
import Herotext from "@/components/Herotext";
import GallerySection from "@/components/GallerySection";
// import Header from "@/components/Header";

export default function Home() {
  return (
    <main
      className="

     my-0 mx-auto"
    >
      {/* <Header /> */}
      <NewHeader />
      <Herotext />
      <GallerySection/>
    </main>
  );
}
