import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="relative mt-[100px] py-10 max-w-[1200px] w-[95%] mx-auto">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
