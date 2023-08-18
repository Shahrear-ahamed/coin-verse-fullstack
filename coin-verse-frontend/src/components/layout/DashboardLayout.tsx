import HeadContent from "@/libs/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Aside from "../DashboardUI/Aside";
import DashboardNav from "../DashboardUI/DashboardNav";

function DashboardLayout({
  children,
  description,
}: {
  children: React.ReactNode;
  description?: string;
}) {
  const router = useRouter();
  const pathName = router?.pathname?.split("/")[1];
  const coTitle = pathName.split("-").join(" ");

  const title = coTitle.charAt(0).toUpperCase() + coTitle.slice(1);

  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState<boolean>(false);
  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] =
    useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const toggleNotificationsMenu = () => {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Add logic to toggle dark mode here
  };

  return (
    <div className="h-screen flex flex-col">
      <HeadContent title={title} description={description} />
      <DashboardNav
        toggleSideMenu={toggleSideMenu}
        toggleProfileMenu={toggleProfileMenu}
        toggleNotificationsMenu={toggleNotificationsMenu}
        toggleTheme={toggleTheme}
        isProfileMenuOpen={isProfileMenuOpen}
        isNotificationsMenuOpen={isNotificationsMenuOpen}
        isDarkMode={isDarkMode}
      />
      <main className="relative flex-1 overflow-y-auto flex gap-10">
        <Aside
          isSideMenuOpen={isSideMenuOpen}
          toggleSideMenu={toggleSideMenu}
        />
        <div className="mt-5 md:mt-10 max-w-[1200px] w-[95%] mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;
