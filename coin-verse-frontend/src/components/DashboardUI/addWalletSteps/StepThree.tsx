import { IStepStore } from "@/interface/share";

export default function StepThree({ stepStore }: { stepStore: IStepStore }) {
  return (
    <div className="flex flex-col relative max-w-xs w-56 mx-auto mt-12 text-gray-950">
      <div>
        <label className="font-medium text-gray-950">Wallet</label>
        <input
          disabled
          value={stepStore.walletName}
          className="w-full mt-2 px-3 py-2 text-gray-950 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>
      <div>
        <label className="font-medium text-gray-950">email</label>
        <input
          value={stepStore.email}
          disabled
          className="w-full mt-2 px-3 py-2 text-gray-950 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
        />
      </div>
    </div>
  );
}
