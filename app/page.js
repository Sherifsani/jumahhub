import Image from "next/image";
import Link from "next/link";
import NewHeader from "@/components/NewHeader";
import Herotext from "@/components/Herotext";
import GallerySection from "@/components/GallerySection";
// import Header from "@/components/Header";
import NewSect from "@/components/NewSect";
import Squiggle from "@/components/Squiggle";
import Contact from "@/components/Contact";
import Social from "@/components/Social";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="my-0 mx-auto">
      {/* <Header /> */}
      <NewHeader />
      <Herotext />
      <GallerySection />
      <div className="w-full bg-black">
        <NewSect />
      </div>
      <Squiggle />

      <Footer />
    </main>
  );
}
