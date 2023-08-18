import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.png";

interface HeaderProps {
  toggleSideMenu: () => void;
  toggleProfileMenu: () => void;
  toggleNotificationsMenu: () => void;
  toggleTheme: () => void;
  isProfileMenuOpen: boolean;
  isNotificationsMenuOpen: boolean;
  isDarkMode: boolean;
}

const DashboardNav: React.FC<HeaderProps> = ({
  toggleSideMenu,
  toggleProfileMenu,
  toggleNotificationsMenu,
  toggleTheme,
  isProfileMenuOpen,
  isNotificationsMenuOpen,
  isDarkMode,
}) => {
  

  return (
    <header className="z-30 py-4 h-16 bg-white shadow-md dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-[#a4f08f] dark:text-[#a4f08f]">
        <Link href="/" className="flex justify-center">
          <Image
            src={logo}
            alt="coin verse logo"
            className="w-[100px] md:w-[130px]"
          />
        </Link>
        {/* Mobile hamburger */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={toggleSideMenu}
          aria-label="Menu">
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"></path>
          </svg>
        </button>
        {/* Rest of the header content */}
        {/* ... */}
      </div>
    </header>
  );
};

export default DashboardNav;
