import RootLayout from "@/components/layout/RootLayout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const Referral: NextPageWithLayout = () => {
  return <div>Faq</div>;
};

Referral.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default Referral;
