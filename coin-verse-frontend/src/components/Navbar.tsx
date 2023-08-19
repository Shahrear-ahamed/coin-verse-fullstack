import UserContext, { UserContextType } from "@/context/userContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const context: UserContextType = useContext(UserContext);

  const handleLogout = async () => {
    try {
      const response = await fetch(`${process.env.url}/auth/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await response.json();

      context?.setUser(null);

      if (data.status) {
        window.location.reload();
      }
    } catch (err) {}
  };

  const handleDashboard = () => {
    window.location.href = "/dashboard";
  };

  return (
    <>
      <nav className="fixed w-full top-0 z-50 drop__shadow">
        <div className="max-w-screen-xl w-[95%] mx-auto my-5 flex justify-between flex-row">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={logo}
                alt="coin verse logo"
                className="w-[100px] md:w-[200px]"
              />
            </Link>
          </div>

          <div>
            <div className="grid justify-between gap-2 md:gap-5 grid-cols-2 items-center sm:grid-cols-2">
              {context?.user?.userId ? (
                <>
                  <button
                    onClick={handleDashboard}
                    className="px-3 py-2 md:py-4 md:px-7 rounded-full text-xs md:text-lg font-medium bg-[#2C343D] hover:bg-[#323b46] duration-300">
                    Dashboard
                  </button>
                  <button
                    onClick={handleLogout}
                    className="px-1 py-2  md:py-4 md:px-7 rounded-full text-xs md:text-lg font-medium bg-[#A4F08F] text-[#1A1D20] sign-up__hover duration-300">
                    Log out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/auth/sign-in"
                    className="px-3 py-2 md:py-4 md:px-7 rounded-full text-xs md:text-lg bg-[#2C343D] hover:bg-[#323b46] duration-300">
                    Sign In
                  </Link>
                  <Link
                    href="/auth/sign-up"
                    className="px-3 py-2 md:py-4 md:px-7 rounded-full text-xs md:text-lg font-medium bg-[#A4F08F] text-[#1A1D20] sign-up__hover duration-300">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* <div>
            <div className="hidden sm:grid justify-between gap-5 grid-cols-1 items-center sm:grid-cols-2">
              {context?.user?.userId ? (
                <>
                  <Link
                    href="/dashboard"
                    className="py-4 px-7 rounded-full text-lg bg-[#2C343D] hover:bg-[#323b46] duration-300">
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="py-4 px-7 rounded-full text-lg font-medium bg-[#A4F08F] text-[#1A1D20] sign-up__hover duration-300">
                    Log out
                  </button>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
          <div className="flex sm:hidden cursor-pointer items-center">
            <div
              onClick={() => setIsNav(!isNav)}
              className={`menu_box ${isNav && "animate"}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div> */}
        </div>
      </nav>
    </>
  );
}
