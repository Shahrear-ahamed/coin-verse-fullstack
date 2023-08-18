import DashboardLayout from "@/components/layout/DashboardLayout";
import { ReactElement } from "react";

function Users() {
  return <div>Users</div>;
}

export default Users;

Users.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
