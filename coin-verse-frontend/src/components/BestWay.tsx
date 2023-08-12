import { useEffect, useRef } from "react";
import { CiMoneyCheck1 } from "react-icons/ci";
import { GiCardExchange } from "react-icons/gi";

export default function BestWay() {
  const startData = [
    {
      title: "Live bitcoin casino",
      description:
        "Get a seat immediately at over 60 tables – featuring the best table games with live-dealer Blackjack, Roulette, Baccarat and popular high-multiplier Game Shows.",
      icon: <GiCardExchange fill="#38E2F9" />,
    },
    {
      title: "Best odds on the market",
      description:
        "Hunt for value with coin verses stats and analytics for all your favorite sports. Bet in-play or Cash Out early to get the most out of every game.",
      icon: <CiMoneyCheck1 fill="#38E2F9" />,
    },
  ];

  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <section className="max-w-[1200px] w-[90%] mx-auto mt-20 mb-10">
      <div className="grid md:grid-cols-2 md:grid-rows-1 gap-10 items-center justify-center pb-o md:pb-20">
        <div className="flex justify-center">
          <lottie-player
            id="firstLottie"
            ref={ref}
            autoplay
            loop
            mode="normal"
            src="https://lottie.host/13999d9b-8a45-496a-9657-17aaa4ffbeb9/ZFR4gf5BPI.json"
            style={{ width: "300px", height: "300px" }}></lottie-player>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-center pb-2 mb-2 md:pb-3 md:mb-9 bg-gradient-to-r from-[#38E2F9] from-10% via-white via-35% font-extrabold to-[#38E2F9] to-85% inline-block text-transparent bg-clip-text">
            Best way to bet with crypto
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
                    <h3 className="text-2xl mb-2 font-extrabold">
                      {data.title}
                    </h3>
                    <p className="text-sm text-gray-300">{data.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}
