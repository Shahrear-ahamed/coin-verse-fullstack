import { FiLogOut } from "react-icons/fi";
import { toast } from "react-toastify";

export default function WithdrawBtn() {
  const withdraw = () => {
    toast.dark("Add your wallet first");
  };
  return (
    <div className="absolute inline bottom-[10%] right-[10%] rounded-md bg-orange-500">
      <button onClick={withdraw} className="flex items-center py-2 px-4">
        Withdraw
        <span className="ml-2">
          <FiLogOut />
        </span>
      </button>
    </div>
  );
}
