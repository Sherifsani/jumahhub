import Herotext from "@/components/Herotext";
import GallerySection from "@/components/GallerySection";
import NewSect from "@/components/NewSect";
import Squiggle from "@/components/Squiggle";
import Services from "@/components/Services";
export default function Home() {
  return (
    <main className="my-0 mx-auto">
      <Herotext />
      <Services />
      <GallerySection />
      {/* <div className="w-full bg-black">
        <NewSect />
      </div>
      <Squiggle /> */}
    </main>
  );
}
