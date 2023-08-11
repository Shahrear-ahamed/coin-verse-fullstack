import Image from "next/image";
import bitcoin from "../assets/cryptocoin/bitcoin.png";
import bitcoinCash from "../assets/cryptocoin/bitcoincash.png";
import dash from "../assets/cryptocoin/dash.svg";
import ethereum from "../assets/cryptocoin/ethereum.png";
import lightCoin from "../assets/cryptocoin/lightcoin.svg";
import mastercard from "../assets/cryptocoin/mastercard.svg";
import visa from "../assets/cryptocoin/visa.svg";

export default function FooterTop() {
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
    <section className="max-w-screen-xl w-[95%] mx-auto py-7">
      <div className="grid grid-cols-1 grid-rows-3 sm:grid-rows-2 sm:grid-cols-2 md:grid-rows-1  md:grid-cols-3 gap-5 items-center ">
        {/* <div className="flex flex-col md:flex-row justify-between gap-5"> */}
        <div className="text-center md:text-start">
          <p className="text-sm lg:text-base">
            2023, Halcyon Super Holdings B.V. <br /> All rights reserved.
          </p>
        </div>
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
    </section>
  );
}
