import AddWallet from "@/components/DashboardUI/AddWallet";
import AddWalletBtn from "@/components/DashboardUI/AddWalletBtn";
import DashboardHomeCard from "@/components/DashboardUI/DashboardHomeCard";
import WithdrawBtn from "@/components/DashboardUI/WithdrawBtn";
import DashboardLayout from "@/components/layout/DashboardLayout";
import UserContext, { UserContextType } from "@/context/userContext";
import { ReactElement, useContext, useState } from "react";

export default function Dashboard() {
  const context: UserContextType = useContext(UserContext);

  const [showWalletModal, setShowWalletModal] = useState<boolean>(false);

  return (
    <div className="w-full h-full relative">
      <h1>Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center mt-7">
        <DashboardHomeCard balance={context?.user?.balance || 0} />
        <AddWalletBtn setShowWalletModal={setShowWalletModal} />
      </div>

      <AddWallet
        showWalletModal={showWalletModal}
        setShowWalletModal={setShowWalletModal}
      />

      <WithdrawBtn />
    </div>
  );
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
