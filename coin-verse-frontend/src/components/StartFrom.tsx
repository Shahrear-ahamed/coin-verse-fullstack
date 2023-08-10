import { useEffect, useRef } from "react";
import { CiMoneyCheck1 } from "react-icons/ci";
import { VscWorkspaceTrusted } from "react-icons/vsc";

export default function StartFrom() {
  const startData = [
    {
      title: "Secure bitcoin betting",
      description:
        "We know security is important to players, which is why all bitcoin deposits are safely held in cold storage – with hot wallet facility only used for day-to-day withdrawals. That’s why Cloudbet enjoys an enduring reputation as a trusted bitcoin gambling site.",
      icon: <VscWorkspaceTrusted fill="#A4F08F" />,
    },
    {
      title: "An evolving crypto betting platform",
      description:
        "You can now buy, deposit and bet with more than just bitcoin. Cloudbet provides over 100,000 customers the ability to bet with ethereum, bitcoin cash and a host of other cryptocurrencies.",
      icon: <CiMoneyCheck1 fill="#A4F08F" />,
    },
  ];

  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <div className="max-w-[1200px] mx-auto my-20">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center py-20">
          <div>
            <lottie-player
              id="firstLottie"
              ref={ref}
              autoplay
              loop
              mode="normal"
              src="https://lottie.host/07e874d3-6d7e-433d-a165-648de3a8e243/tX9HQlua8K.json"
              style={{ width: "400px", height: "400px" }}></lottie-player>
          </div>
          <div>
            <h2 className="text-5xl font-normal mb-9">
              Best bitcoin gambling site since 2013
            </h2>
            <div className="grid gap-7 mt-3">
              {
                // start data
                startData.map((data, index) => (
                  <div key={index} className="flex gap-16 justify-start">
                    <div className="text-6xl">{data.icon}</div>
                    <div>
                      <h3 className="text-2xl mb-2">{data.title}</h3>
                      <p className="text-sm text-gray-300">
                        {data.description}
                      </p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
