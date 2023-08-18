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

import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

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

export const getServerSideProps: GetServerSideProps<{
  coinsData: CoinsData;
}> = async () => {
  const res = await fetch(`${process.env.url}/crypto/home`);
  const coinsData = await res.json();
  return { props: { coinsData } };
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
        <HomeCryptoCoins coinsData={coinsData} />
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
