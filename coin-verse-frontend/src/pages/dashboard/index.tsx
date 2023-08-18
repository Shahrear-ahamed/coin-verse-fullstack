import DashboardLayout from "@/components/layout/DashboardLayout";
import { ReactElement } from "react";

export default function Dashboard() {
  return <div>This is dashboard</div>;
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
