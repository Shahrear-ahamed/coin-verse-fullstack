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
          <div className="relative">
            <h2 className="display_title display_3 display_3-shadow">
              Best way to bet with crypto
            </h2>
            <div className="display_title display_3 glow opacity-50 left-0">
              Best way to bet with crypto
            </div>
          </div>
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
