import { useEffect, useRef } from "react";
import { CiMoneyCheck1 } from "react-icons/ci";
import { VscWorkspaceTrusted } from "react-icons/vsc";

export default function StartFrom() {
  const startData = [
    {
      title: "Secure bitcoin betting",
      description:
        "We know security is important to players, which is why all bitcoin deposits are safely held in cold storage – with hot wallet facility only used for day-to-day withdrawals. That’s why coin verse enjoys an enduring reputation as a trusted bitcoin gambling site.",
      icon: <VscWorkspaceTrusted fill="#F7AB3A" />,
    },
    {
      title: "An evolving crypto betting platform",
      description:
        "You can now buy, deposit and bet with more than just bitcoin. Coin verse provides over 100,000 customers the ability to bet with ethereum, bitcoin cash and a host of other cryptocurrencies.",
      icon: <CiMoneyCheck1 fill="#F7AB3A" />,
    },
  ];

  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <section className="max-w-[1200px] w-[90%] mx-auto mt-10 mb-20">
      <div className="grid md:grid-cols-2 md:grid-rows-1 gap-10 items-center justify-center pb-o md:pb-20">
        <div className="flex justify-center">
          <lottie-player
            id="firstLottie"
            ref={ref}
            autoplay
            loop
            mode="normal"
            src="https://lottie.host/138a1917-e433-4537-a8ba-df061bdd4bff/3PbNwqnUNS.json"
            style={{ width: "320px", height: "300px" }}></lottie-player>
        </div>
        <div>
          <div className="relative">
            <h2 className="display_title display_1 display_1-shadow">
              Best bitcoin gambling site since 2012
            </h2>
            <div className="display_title display_1 glow opacity-50 left-0">
              Best bitcoin gambling site since 2012
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
