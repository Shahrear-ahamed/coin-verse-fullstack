import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-screen-xl w-[90%] mx-auto py-10 px-2">
      <div className="grid gap-7 grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-1 text-gray-300 items-center">
        <div className="text-xs sm:text-sm ml-3 md:ml-0 space-y-2 text-gray-300">
          <h6 className="text-[18px] mb-3 font-semibold text-white">Popular</h6>
          <div className="flex flex-col space-y-2">
            <Link className="inline-block text-gray-400" href="/blog">
              Blog
            </Link>
            <Link className="inline-block text-gray-400" href="/referral">
              Referral program
            </Link>
            <Link className="inline-block text-gray-400" href="/affiliate">
              Affiliate program
            </Link>
          </div>
        </div>
        <div className="text-xs sm:text-sm ml-4 md:ml-0 space-y-2 ">
          <h6 className="text-[18px] mb-3 font-semibold text-white">
            Supports
          </h6>
          <div className="flex flex-col space-y-2">
            <Link className="inline-block text-gray-400" href="/faq">
              Faq
            </Link>
            <Link
              className="inline-block text-gray-400"
              href="/terms-and-condition">
              Terms and services
            </Link>
            <Link
              className="inline-block text-gray-400"
              href="/transaction-fee">
              Crypto transaction fees
            </Link>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <Image
            src={logo}
            width={180}
            className="mx-auto"
            alt="coin verse logo"
          />
          <p className="text-sm text-center mt-3 text-gray-400">
            @ Coin verse 2023 all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
