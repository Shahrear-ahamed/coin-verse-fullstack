import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function Hero() {
  return (
    <section className="">
      <div className="relative mb-16">
        <div
          className="absolute inset-0 blur-xl h-full"
          style={{
            background:
              "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.15) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
          }}></div>
        <div className="relative pt-20 pb-10 text-center">
          <div className="max-w-[1100px] mx-auto px-4 py-28 overflow-hidden md:px-8 items-center">
            <div>
              <h1 className="text-6xl font-extrabold bg-gradient-to-r from-[#38E2F9] from-20% via-[#FFACC8] via-50%  to-[#FFF176] to-85% inline-block text-transparent bg-clip-text py-10">
                The Ultimate <br /> Bitcoin Betting Experience
              </h1>
            </div>
            <div className="mt-10 inline-block border-4 border-[#a4f08f] rounded-full p-2 get-start__hover duration-300">
              <Link href="/dashboard" className="font-bold text-2xl inline-block bg-[#a4f08f] rounded-full px-10 py-7">
                <div className="flex text-[#1A1D20]">
                  Get Start
                  <div className="text-3xl ml-5">
                    <BsFillArrowRightCircleFill fill="#1A1D20" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
