import RootLayout from "@/components/layout/RootLayout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const TermsAndCondition: NextPageWithLayout = () => {
  return <div>Faq</div>;
};

TermsAndCondition.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default TermsAndCondition;
