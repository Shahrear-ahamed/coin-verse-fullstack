import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth select-none">
      <Head />
      <body className="bg-[#1A1D20] text-white relative">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
