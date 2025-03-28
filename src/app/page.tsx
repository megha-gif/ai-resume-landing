import Navbar from "@/components/Navbar";
import Herosection from "@/components/Herosection";
import Featuresection from "@/components/Featuresection";
import Ctasection from "@/components/Ctasection";
import Faqsection from "@/components/Faqsection";
import Footersection from "@/components/Footersection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Featuresection />
      <Ctasection />
      <Faqsection />
      <Footersection />
    </>
  );
}
