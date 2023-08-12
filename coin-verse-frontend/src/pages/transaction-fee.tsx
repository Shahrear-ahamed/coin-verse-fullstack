import RootLayout from "@/components/layout/RootLayout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const TransactionFee: NextPageWithLayout = () => {
  return <div>Faq</div>;
};

TransactionFee.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default TransactionFee;
