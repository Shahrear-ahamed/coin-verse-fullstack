import { useEffect, useRef } from "react";
import { DiAtom } from "react-icons/di";
import { GiCardExchange } from "react-icons/gi";

export default function BestCasino() {
  const startData = [
    {
      title: "1B+ bets placed",
      description:
        "Coin verse is the most secure bitcoin betting site online, offering bitcoin casino gambling or bitcoin sports betting for players around the world. Customer support is available 24/7.",
      icon: <GiCardExchange fill="#ec4079e7" />,
    },
    {
      title: "Crypto convenience",
      description:
        "Get BTC, ETH, USDT, and more using Visa, MasterCard, or Apple Pay. Use over 30 cryptocurrencies with free, low-minimum deposits and withdrawals. Get your winnings in as little as 5 minutes.",
      icon: <DiAtom fill="#ec4079e7" />,
    },
  ];

  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <div className="max-w-[1200px] w-[95%] mx-auto my-10 md:my-20">
      <div className="grid md:grid-cols-2 md:grid-rows-1 gap-10 items-center justify-center ">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl lg:text-5xl mb-9 bg-gradient-to-r from-[#ec4079e7] from-10% via-white via-35% font-extrabold to-[#ec4079e7] to-85% inline-block text-transparent bg-clip-text">
            The Original Crypto Coin Casino
          </h2>
          <div className="grid gap-7 mt-3">
            {
              // start data
              startData.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 md:flex-row md:gap-10 items-center md:items-start justify-start">
                  <div className="text-5xl">{data.icon}</div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl mb-2 font-extrabold">{data.title}</h3>
                    <p className="text-sm text-gray-300">{data.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="flex justify-center order-1 md:order-2">
          <lottie-player
            id="firstLottie"
            ref={ref}
            autoplay
            loop
            mode="normal"
            src="https://lottie.host/07e874d3-6d7e-433d-a165-648de3a8e243/tX9HQlua8K.json"
            style={{ width: "300px", height: "300px" }}></lottie-player>
        </div>
      </div>
    </div>
  );
}
