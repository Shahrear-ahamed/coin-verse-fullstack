import UserContext, { UserContextType } from "@/context/userContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { BiHome } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FiUsers } from "react-icons/fi";

interface AsideProps {
  isSideMenuOpen: boolean;
  toggleSideMenu: () => void;
}

const sideBar = [
  {
    name: "Dashboard",
    icon: BiHome,
    link: "/dashboard",
  },
  {
    name: "Profile",
    icon: CgProfile,
    link: "/dashboard/profile",
  },
];

const Aside: React.FC<AsideProps> = ({ isSideMenuOpen, toggleSideMenu }) => {
  const router = useRouter();
  const context: UserContextType = useContext(UserContext);

  if (context?.user?.role === "admin") {
    sideBar.push({
      name: "Users",
      icon: FiUsers,
      link: "/dashboard/users",
    });
  }

  return (
    <>
      <aside className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block max-h-full">
        <div className="py-4 text-gray-500 dark:text-gray-400">
          <ul className="mt-6">
            {sideBar.map((item, index) => (
              <li key={index} className="relative px-6 py-3">
                {item.link === router.pathname && (
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-[#a4f08f] rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"></span>
                )}
                <Link
                  href={item.link}
                  className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100">
                  {/* {item.icon} */}
                  <item.icon style={{ fontSize: "20px" }} />
                  <span className="ml-4">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* // mobile menu  */}
      {isSideMenuOpen && (
        <div
          className="fixed inset-0 z-10 mt-16 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"
          onClick={toggleSideMenu}
          style={{
            transition: "opacity 150ms ease-in-out",
            opacity: 0.5,
          }}></div>
      )}
      <aside
        className={`fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 md:hidden duration-300 ${
          isSideMenuOpen ? "left-0" : "-left-[300px]"
        }`}>
        <div className="py-4 text-gray-500 dark:text-gray-400">
          <ul className="mt-6">
            {sideBar.map((item, index) => (
              <li key={index} className="relative px-6 py-3">
                {item.link === router.pathname && (
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-[#a4f08f] rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"></span>
                )}
                <Link
                  href={item.link}
                  className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100">
                  {item.icon}
                  <span className="ml-4">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Aside;
