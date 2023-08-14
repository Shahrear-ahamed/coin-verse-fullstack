import RootLayout from "@/components/layout/RootLayout";
import { ReactElement } from "react";

export default function Dashboard() {
  return <div>Dashboard</div>;
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
