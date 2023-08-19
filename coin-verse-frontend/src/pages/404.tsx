import HeadContent from "@/libs/head";
import Link from "next/link";
import { FaUserSecret } from "react-icons/fa";

export default function ErrorPage({ info }: { info: string }) {
  const infoText = info ? info : "Page not found, Please";
  return (
    <>
      <HeadContent title={"Page not found"} description={"We are sorry"} />

      <main className="h-screen flex justify-center items-center">
        <div className="flex flex-col items-center px-6 mx-auto">
          <span>
            <FaUserSecret style={{ fontSize: "40px", color: "#a4f08f" }} />
          </span>
          <h1 className="text-6xl font-semibold text-gray-700 dark:text-gray-200">
            4<span className="text-[#a4f08f]">0</span>4
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-center">
            {infoText + " "}
            <Link
              className="text-[#a4f08f] hover:underline dark:text-[#a4f08f]"
              href="/">
              go back
            </Link>
            .
          </p>
        </div>
      </main>
    </>
  );
}
