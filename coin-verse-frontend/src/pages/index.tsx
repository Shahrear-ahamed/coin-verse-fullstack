import BestCasino from "@/components/BestCasino";
import BestWay from "@/components/BestWay";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import StartFrom from "@/components/StartFrom";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <StartFrom />
      <BestCasino />
      <BestWay />
      <Footer />
    </div>
  );
}
