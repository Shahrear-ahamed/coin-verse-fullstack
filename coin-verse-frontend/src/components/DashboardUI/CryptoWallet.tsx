import { IWalletResponse } from "@/interface/share";

export default function CryptoWallet({ wallet }: { wallet: IWalletResponse }) {

  return (
    <div className="bg-[#A4F08F] rounded-md px-3 py-5 h-[120px] ld:h-[180px] cursor-pointer flex flex-col text-2xl justify-center items-center font-semibold hover:shadow-lg hover:shadow-[#405e387c] duration-300">
      <p className="text-gray-800 text-xl">{wallet.walletName}</p>
      <p className="text-gray-600 text-lg">Is pending for approve</p>
    </div>
  );
}
