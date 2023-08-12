import logo from "@/assets/logo.png";
import Image from "next/image";
import bitcoin from "../assets/cryptocoin/bitcoin.png";
import bitcoinCash from "../assets/cryptocoin/bitcoincash.png";
import dash from "../assets/cryptocoin/dash.svg";
import ethereum from "../assets/cryptocoin/ethereum.png";
import lightCoin from "../assets/cryptocoin/lightcoin.svg";
import mastercard from "../assets/cryptocoin/mastercard.svg";
import visa from "../assets/cryptocoin/visa.svg";

export default function Footer() {
  const coins = [
    {
      name: "bitcoin",
      image: bitcoin,
    },
    {
      name: "bitcoin cash",
      image: bitcoinCash,
    },
    {
      name: "dash",
      image: dash,
    },
    {
      name: "ethereum",
      image: ethereum,
    },
    {
      name: "light coin",
      image: lightCoin,
    },
  ];
  return (
    <footer className="max-w-screen-xl w-[90%] mx-auto py-10 px-2">
      <div className="flex flex-col md:flex-row gap-5 justify-evenly items-center py-10">
        <div className="text-center">
          <div className="flex space-x-2 justify-center">
            {coins.map((coin, idx) => (
              <Image
                key={idx}
                src={coin.image}
                width={32}
                height={32}
                alt={coin.name}
              />
            ))}
          </div>
          <div className="text-sm md:text-base mt-2">30+ more coins</div>
        </div>
        <div className="flex flex-col items-center md:items-end col-span-1 sm:col-span-2 md:col-span-1">
          <div className="text-sm md:text-base">Buy coin via</div>
          <div className="flex space-x-2">
            <Image src={visa} width={40} height={40} alt="visa" />
            <Image src={mastercard} width={40} height={40} alt="mastercard" />
          </div>
        </div>
      </div>

      {/* main footer */}
      <div className="grid gap-7 grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-1 text-gray-300">
        <div className="text-xs sm:text-sm ml-3 md:ml-0 space-y-2 text-gray-300">
          <h6 className="text-[18px] mb-3 font-semibold text-white">Popular</h6>
          <p>Blog</p>
          <p>Referral program</p>
          <p>Affiliate program</p>
        </div>
        <div className="text-xs sm:text-sm ml-4 md:ml-0 space-y-2 ">
          <h6 className="text-[18px] mb-3 font-semibold text-white">
            Supports
          </h6>
          <p>Faq</p>
          <p>Terms and services</p>
          <p>Crypto transaction fees</p>
        </div>
        <div className="col-span-2 md:col-span-1">
          <Image
            src={logo}
            width={180}
            className="mx-auto"
            alt="coin verse logo"
          />
          <p className="text-sm text-center mt-3">
            @ Coin verse 2023 all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
