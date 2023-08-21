import { IStepStoreProps } from "@/interface/share";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function StepTwo({ stepStore, setStepStore }: IStepStoreProps) {
  const [isCurrentPasswordHidden, setIsCurrentPasswordHidden] = useState(true);

  const handleWalletEmailCredential = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = e.target.value;
    setStepStore({
      ...stepStore,
      email: newValue,
    });
  };

  const handleWalletPasswordCredential = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = e.target.value;
    setStepStore({
      ...stepStore,
      password: newValue,
    });
  };

  return (
    <div className="flex flex-col relative max-w-xs w-56 mx-auto mt-12">
      <div className="mt-7 space-y-3">
        <div>
          <label className="font-medium text-gray-950">
            email <span className="text-red-700">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="your wallet email"
            onChange={handleWalletEmailCredential}
            className="w-full mt-2 px-3 py-2 text-gray-950 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
        </div>

        <div>
          <label className="font-medium text-gray-950">
            password<span className="text-red-700">*</span>
          </label>
          <div className="relative">
            <input
              type={isCurrentPasswordHidden ? "password" : "text"}
              placeholder="your wallet password"
              onChange={handleWalletPasswordCredential}
              className="w-full mt-2 px-3 py-2 text-gray-950 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
            <button
              className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600"
              onClick={() =>
                setIsCurrentPasswordHidden(!isCurrentPasswordHidden)
              }>
              {isCurrentPasswordHidden ? (
                <FaEye className="eye_color text-lg" />
              ) : (
                <FaEyeSlash className="eye_color text-lg" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
