import { IWallet } from "@/interface/coins";

export default function ViewWallet({
  wallets,
  viewWallet,
  setViewWallet,
}: {
  wallets: IWallet[];
  viewWallet: boolean;
  setViewWallet: (viewWallet: boolean) => void;
}) {
  return (
    <div
      className={`${
        viewWallet ? "scale-100 opacity-100" : "scale-0 opacity-0"
      } fixed top-0 left-0 bg-[#00000060] h-screen w-screen z-50 duration-200 overflow-hidden`}>
      <div className="border border-black w-full h-full rounded-md relative">
        <div className="absolute max-w-[1000px] w-[95%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-full bg-gray-700 mx-auto flex flex-col justify-center items-center md:px-0 px-3 py-5 rounded-md">
            <h1>View Wallets</h1>

            <table className="mt-4 whitespace-no-wrap">
              <thead>
                <tr className="text-xs font-semibold tracking-wide text-center text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                  <th className="px-4 py-3">Wallet Name</th>
                  <th className="px-4 py-3">Wallet Id</th>
                  <th className="px-4 py-3">Wallet Password</th>
                </tr>
              </thead>
              <tbody className="divide-y dark:divide-gray-700 bg-gray-800">
                {
                  // show user wallet
                  wallets?.map((wallet) => (
                    <tr
                      key={wallet.id}
                      className="text-gray-700 dark:text-gray-400">
                      <td className="px-4 py-3 items-center">
                        <p className="text-center font-medium">
                          {wallet.walletName}
                        </p>
                      </td>
                      <td className="px-4 py-3 items-center">
                        <p className="text-center font-medium">{wallet.id}</p>
                      </td>
                      <td className="px-4 py-3 flex justify-center items-center">
                        <p className="text-center font-medium">
                          {wallet.password}
                        </p>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>

            <button
              onClick={() => setViewWallet(false)}
              className="bg-purple-600 px-4 py-2 rounded mt-5">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
