import Image from "next/image";
import Link from "next/link";
import heroIcon from "../assets/hero/cryptohero.png";

function Hero() {
  return (
    <div className="relative mb-16">
      <div
        className="absolute inset-0 blur-xl h-full"
        style={{
          background:
            "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.15) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
        }}></div>
      <div className="relative pt-20 pb-10">
        <section>
          <div className="max-w-[1100px] mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex items-center">
            <div className="flex-none space-y-5 max-w-xl">
              <h1 className="text-4xl text-white font-extrabold sm:text-5xl">
                The Ultimate bitcoin betting experience
              </h1>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                unde voluptate, alias sint aspernatur totam praesentium beatae
                provident! Deleniti, sapiente.
              </p>
              <div className="flex items-center gap-x-3 sm:text-sm">
                <Link
                  href="/all-books"
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                  View Currencies
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href="/add-new-book"
                  className="flex items-center justify-center gap-x-1 py-2 px-4  hover:text-indigo-600 font-medium duration-150 text-white md:inline-flex">
                  Buy currency
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-end">
              {/* Replace with your image */}
              <Image
                src={heroIcon}
                className="max-w-xl"
                width={400}
                height={400}
                alt="hero"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
