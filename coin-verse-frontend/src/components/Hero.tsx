import Link from "next/link";
import { BsChevronDown, BsFillArrowRightCircleFill } from "react-icons/bs";

import Image from "next/image";
import bitcoin from "../assets/cryptocoin/bitcoin.png";
import bitcoinCash from "../assets/cryptocoin/bitcoincash.png";
import dash from "../assets/cryptocoin/dash.svg";
import ethereum from "../assets/cryptocoin/ethereum.png";
import lightCoin from "../assets/cryptocoin/lightcoin.svg";
import paxGold from "../assets/cryptocoin/paxgold.png";

function Hero() {
  const outSuccess = [
    {
      title: "10 Years",
      subtitle: "in the business",
    },
    {
      title: "Millions",
      subtitle: "of bets token",
    },
    {
      title: "Billions",
      subtitle: "bets placed",
    },
  ];

  const coins = [
    { name: "bitcoin", image: bitcoin },
    { name: "bitcoin cash", image: bitcoinCash },
    { name: "dash", image: dash },
    { name: "ethereum", image: ethereum },
    { name: "light coin", image: lightCoin },
    { name: "pax gold", image: paxGold },
  ];

  return (
    <section>
      <div className="relative mb-6 md:mb-16">
        <div
          className="absolute inset-0 blur-xl h-full"
          style={{
            background:
              "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.15) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
          }}></div>
        <div className="relative pt-20 pb-10 text-center">
          <div className="max-w-[1100px] mx-auto px-4 py-10 sm:py-16 md:py-20 lg:py-28 overflow-hidden md:px-8 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#38E2F9] from-20% via-[#FFACC8] via-50%  to-[#FFF176] to-85% inline-block text-transparent bg-clip-text py-10">
                The Ultimate <br /> Bitcoin Betting Experience
              </h1>
            </div>
            <div className="mt-10 inline-block border-4 border-[#a4f08f] rounded-full p-2 get-start__hover duration-300">
              <Link
                href="/dashboard"
                className="font-bold text-xl md:text-2xl inline-block bg-[#a4f08f] rounded-full px-4 py-5 md:px-10 md:py-7">
                <div className="flex text-[#1A1D20]">
                  Get Start
                  <div className="text-2xl md:text-3xl ml-5 flex items-center">
                    <BsFillArrowRightCircleFill fill="#1A1D20" />
                  </div>
                </div>
              </Link>
            </div>

            <div className="relative flex justify-between w-full md:max-w-[820px] mx-auto mt-16">
              {outSuccess.map((item, idx) => (
                <div key={idx}>
                  <h4 className="text-xl md:text-5xl mb-2 md:mb-6">
                    {item.title}
                  </h4>
                  <p className="text-sm md:text-base mb-2 text-gray-400">
                    {item.subtitle}
                  </p>
                </div>
              ))}
              <div className="absolute z-30 text-2xl -bottom-28 md:-bottom-48 left-1/2 translate-x-1/2 animate-bounce cursor-pointer">
                <BsChevronDown />
              </div>
            </div>

            <div className="max-w-3xl mx-auto flex select-none py-12 hero_coins_mask overflow-hidden">
              <div className="flex-shrink-0 flex items-center justify-around whitespace-nowrap w-full animate-marquee">
                {coins.map((item, idx) => (
                  <div key={idx} className="grid">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="w-8 md:w-16 h-8 md:h-16"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex-shrink-0 flex items-center justify-around whitespace-nowrap w-full animate-marquee">
                {coins.map((item, idx) => (
                  <div key={idx} className="grid">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="w-8 md:w-16 h-8 md:h-16"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
