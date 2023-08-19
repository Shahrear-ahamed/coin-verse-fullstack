import ChangePassword from "@/components/DashboardUI/ChangePassword";
import ProfileDetails from "@/components/DashboardUI/ProfileDetails";
import DashboardLayout from "@/components/layout/DashboardLayout";
import UserContext, { UserContextType } from "@/context/userContext";
import { ReactElement, useContext } from "react";

function Profile() {
  const context: UserContextType = useContext(UserContext);
  return (
    <>
      <h1 className="text-[#A4F08F] text-xl font-semibold text-center">
        Profile
      </h1>
      <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start gap-5 mt-10 md:mt-20">
        <ProfileDetails context={context} />
        <ChangePassword context={context} />
      </div>
    </>
  );
}

export default Profile;

Profile.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
