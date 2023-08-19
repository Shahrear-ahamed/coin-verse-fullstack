import UserContext, { UserContextType } from "@/context/userContext";
import HeadContent from "@/libs/head";
import ErrorPage from "@/pages/404";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Aside from "../DashboardUI/Aside";
import DashboardNav from "../DashboardUI/DashboardNav";

const adminRoute = ["/dashboard/users"];

function DashboardLayout({
  children,
  description,
}: {
  children: React.ReactNode;
  description?: string;
}) {
  const context: UserContextType = useContext(UserContext);

  const router = useRouter();
  const path = router?.pathname.slice(1);

  const title = path.charAt(0).toUpperCase() + path.slice(1);

  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  // check user admin or other user
  if (
    !(context?.user?.role === "admin" || "super-admin") &&
    !adminRoute.includes(router.pathname)
  ) {
    return (
      <>
        <ErrorPage info={"You are not authorize for this page, Please"} />;
      </>
    );
  }

  return (
    <div className="h-screen flex flex-col">
      <HeadContent title={title} description={description} />
      <DashboardNav toggleSideMenu={toggleSideMenu} />
      <main className="relative flex-1 overflow-y-auto flex gap-10">
        <Aside
          isSideMenuOpen={isSideMenuOpen}
          toggleSideMenu={toggleSideMenu}
        />
        <div className="my-5 md:my-10 max-w-[1200px] overflow-y-auto w-full px-5 mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;
