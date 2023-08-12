import BestCasino from "@/components/BestCasino";
import BestWay from "@/components/BestWay";
import Footer from "@/components/Footer";
import FooterTop from "@/components/FooterTop";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import StartFrom from "@/components/StartFrom";

import type { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <StartFrom />
      <BestCasino />
      <BestWay />
      <FooterTop />
      <Footer />
    </main>
  );
};

export default Home;
