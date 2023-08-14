import BestCasino from "@/components/BestCasino";
import BestWay from "@/components/BestWay";
import Footer from "@/components/Footer";
import FooterTop from "@/components/FooterTop";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import StartFrom from "@/components/StartFrom";

import OfferModal from "@/components/OfferModal";
import HeadContent from "@/libs/head";
import type { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <HeadContent title="Home" />
      <main className="relative">
        <Navbar />
        <Hero />
        <StartFrom />
        <BestCasino />
        <BestWay />
        <FooterTop />
        <Footer />
        <OfferModal />
      </main>
    </>
  );
};

export default Home;
