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

import { Coin, CoinsData } from "@/interface/coins";
import { homePage } from "@/service/apiRequest";
import type { InferGetServerSidePropsType } from "next";

// export const getServerSideProps = async () => {
//   try {
//     const coinsData = await homePage();

//     return { props: { coinsData } };
//   } catch (error) {
//     // Handle the error appropriately
//     console.error("Error fetching data:", error);
//     return {
//       props: { error: "Failed to fetch data" },
//     };
//   }
// };

interface Stats {
  total: number;
  totalCoins: number;
  totalMarkets: number;
  totalExchanges: number;
  totalMarketCap: string;
  total24hVolume: string;
}

interface CoinData {
  status: string;
  data: {
    stats: Stats;
    coins: Coin[]; // Define an array of Coin objects
  };
}

export const getStaticProps = async () => {
  try {
    const coinsDataResponse: CoinData = await homePage();

    const coinsData: CoinsData = {
      status: coinsDataResponse.status,
      coins: coinsDataResponse.data.coins,
    };

    return { props: { coinsData }, revalidate: 60 };
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
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <>
      <HeadContent title="Home" />
      <main className="relative">
        <Navbar />
        <Hero />
        <HomeCryptoCoins coinsData={coinsData!} />
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
