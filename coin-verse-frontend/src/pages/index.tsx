import BestCasino from "@/components/BestCasino";
import Footer from "@/components/Footer";
import FooterTop from "@/components/FooterTop";
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
      <FooterTop />
      <Footer />
    </div>
  );
}
