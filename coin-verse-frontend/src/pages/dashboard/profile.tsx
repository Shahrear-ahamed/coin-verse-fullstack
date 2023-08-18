import DashboardLayout from "@/components/layout/DashboardLayout";
import { ReactElement } from "react";

function Profile() {
  return <div>Profile</div>;
}

export default Profile;

Profile.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
