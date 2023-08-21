import { IStepStoreProps } from "@/interface/share";

export default function StepOne({ stepStore, setStepStore }: IStepStoreProps) {
  const handleWalletName = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    setStepStore({
      ...stepStore,
      walletName: newValue,
    });
  };

  return (
    <div className="flex flex-col relative max-w-xs w-56 mx-auto mt-12 text-gray-950">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-600 right-2.5 addWalletIcon"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
      <select
        onChange={handleWalletName}
        className="w-full p-2.5 text-gray-600 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 options">
        <option value="">Select a wallet</option>
        <option value="Binance wallet">Binance wallet</option>
        <option value="Bitcoin wallet">Bitcoin wallet</option>
        <option value="MetaMask wallet">MetaMask wallet</option>
        <option value="Trust wallet">Trust wallet</option>
        <option value="Coin base wallet">Coin base wallet</option>
      </select>
    </div>
  );
}
