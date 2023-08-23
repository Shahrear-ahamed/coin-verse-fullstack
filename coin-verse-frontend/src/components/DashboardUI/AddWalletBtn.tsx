import UserContext from "@/context/userContext";
import { useContext } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";

export default function AddWalletBtn({
  setShowWalletModal,
}: {
  setShowWalletModal: (showWalletModal: boolean) => void;
}) {
  return (
    <div
      onClick={() => setShowWalletModal(true)}
      className="bg-[#A4F08F] rounded-md px-3 py-5 h-[120px] ld:h-[180px] cursor-pointer flex text-2xl justify-center items-center font-semibold hover:shadow-lg hover:shadow-[#405e387c] duration-300">
      <p className="text-gray-800 flex gap-2 items-center">
        <BsFillPlusCircleFill className="addWalletIcon" /> Add Your wallet
      </p>
    </div>
  );
}
