import RootLayout from "@/components/layout/RootLayout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

const Coins: NextPageWithLayout = () => {
  return <div>Coins</div>;
};

export default Coins;

Coins.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
