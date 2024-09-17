import Fitur from "@/components/hfd/layouting/fitur";
import HargaSection from "@/components/hfd/layouting/harga";
import Hero from "@/components/hfd/layouting/hero";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-y-8">
        <div className="flex min-h-min p-4">
          <Hero />
        </div>
        <div className="flex min-h-fit p-4">
          <Fitur />
          
        </div>
        <div className="flex min-h-fit p-4">
          <HargaSection />
        </div>
      </div>
    </div>
  );
}
