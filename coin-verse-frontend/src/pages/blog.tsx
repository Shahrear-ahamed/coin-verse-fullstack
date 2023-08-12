import RootLayout from "@/components/layout/RootLayout";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

const Blog: NextPageWithLayout = () => {
  return <div>Faq</div>;
};

Blog.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default Blog;
