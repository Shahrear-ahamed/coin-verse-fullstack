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
    <div className="flex flex-col sm:flex-row gap-5 md:justify-evenly items-center py-10">
      <div className="text-center w-[200px] mx-auto">
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
        <div className="text-sm mt-2">30+ more coins</div>
      </div>
      <div className="flex flex-col items-center md:items-end col-span-1 sm:col-span-2 md:col-span-1 w-[200px] mx-auto">
        <div className="text-sm mb-2 ">Buy coin via</div>
        <div className="flex space-x-2">
          <Image src={visa} width={40} height={40} alt="visa" />
          <Image src={mastercard} width={40} height={40} alt="mastercard" />
        </div>
      </div>
    </div>
  );
}
