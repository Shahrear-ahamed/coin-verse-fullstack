import BestCasino from "@/components/BestCasino";
import BestWay from "@/components/BestWay";
import Footer from "@/components/Footer";
import FooterTop from "@/components/FooterTop";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import StartFrom from "@/components/StartFrom";

import HomeCryptoCoins from "@/components/HomeCryptoCoins";
import OfferModal from "@/components/OfferModal";
import HeadContent from "@/libs/head";

import { homePage } from "@/service/apiRequest";
import type { InferGetServerSidePropsType } from "next";

export type CoinData = {
  uuid: string;
  symbol: string;
  name: string;
  color: string;
  iconUrl: string;
  marketCap: string;
  price: string;
  listedAt: number;
  tier: number;
  change: string;
  rank: number;
  sparkline: string[];
  lowVolume: boolean;
  coinrankingUrl: string;
  _24hVolume: string;
  btcPrice: string;
};

export type CoinsData = {
  statusCode: number;
  status: string;
  message: string;
  data: CoinData[];
};

export const getServerSideProps = async () => {
  try {
    const coinsData = await homePage();

    return { props: { coinsData } };
  } catch (error) {
    // Handle the error appropriately
    console.error("Error fetching data:", error);
    return {
      props: { error: "Failed to fetch data" },
    };
  }
};

export default function Home({
  coinsData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <HeadContent title="Home" />
      <main className="relative">
        <Navbar />
        <Hero />
        {coinsData?.status && <HomeCryptoCoins coinsData={coinsData} />}
        <StartFrom />
        <BestCasino />
        <BestWay />
        <FooterTop />
        <Footer />
        <OfferModal />
      </main>
    </>
  );
}
