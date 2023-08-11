import Footer from "@/components/Footer";
import FooterTop from "@/components/FooterTop";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import StartFrom from "@/components/StartFrom";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <StartFrom />
      <FooterTop />
      <Footer />
    </div>
  );
}
