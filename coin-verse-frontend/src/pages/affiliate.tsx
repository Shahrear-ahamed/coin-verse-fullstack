import RootLayout from "@/components/layout/RootLayout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const Affiliate: NextPageWithLayout = () => {
  return <div>Faq</div>;
};

Affiliate.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default Affiliate;
