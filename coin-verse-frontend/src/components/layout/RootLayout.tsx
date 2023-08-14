import HeadContent from "@/libs/head";
import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

import { useRouter } from "next/router";

function RootLayout({
  children,
  description,
}: {
  children: React.ReactNode;
  description?: string;
}) {
  const router = useRouter();
  const pathName = router?.pathname?.split("/")[1];
  const coTitle = pathName.split("-").join(" ");

  const title = coTitle.charAt(0).toUpperCase() + coTitle.slice(1);

  return (
    <>
      <HeadContent title={title} description={description} />
      <Navbar />
      <main className="relative mt-[100px] py-10 max-w-[1200px] w-[95%] mx-auto">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
