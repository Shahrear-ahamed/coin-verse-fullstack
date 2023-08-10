import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isNav, setIsNav] = useState(false);
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="../assets/favicon.ico" />
        <title>Coin Verse - Explore the World of Digital Coins</title>
      </Head>
      <nav className="absolute w-full top-0 z-50 drop__shadow">
        <div className="max-w-screen-xl w-[95%] mx-auto my-5 flex justify-between flex-row">
          <div className="flex-none lg:flex-initial">
            <Link href="/">
              <Image
                src={logo}
                width={200}
                height={300}
                alt="coin verse logo"
              />
            </Link>
          </div>

          <div>
            <div className="hidden sm:grid justify-between gap-5 grid-cols-1 items-center sm:grid-cols-2">
              <Link
                href="/auth/sign-in"
                className="py-4 px-7 rounded-full text-lg bg-[#2C343D] hover:bg-[#323b46] duration-300">
                Sign In
              </Link>
              <Link
                href="/auth/sign-up"
                className="py-4 px-7 rounded-full text-lg font-medium bg-[#A4F08F] text-[#1A1D20] sign-up__hover duration-300">
                Sign Up
              </Link>
            </div>
          </div>
          <div className="flex sm:hidden cursor-pointer items-center">
            <div
              onClick={() => setIsNav(!isNav)}
              className={`menu_box ${isNav && "animate"}`}>
              {/* className={`${menu_box} ${isNav && styles.animate}`}> */}
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
