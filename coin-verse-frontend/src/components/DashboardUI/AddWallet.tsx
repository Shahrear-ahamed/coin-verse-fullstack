import UserContext, { UserContextType } from "@/context/userContext";
import { IStepStore } from "@/interface/share";
import { addWallet, getProfile } from "@/service/apiRequest";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import StepOne from "./addWalletSteps/StepOne";
import StepThree from "./addWalletSteps/StepThree";
import StepTwo from "./addWalletSteps/StepTwo";

const AddWallet = ({
  showWalletModal,
  setShowWalletModal,
}: {
  showWalletModal: boolean;
  setShowWalletModal: (showWalletModal: boolean) => void;
}) => {
  const context: UserContextType = useContext(UserContext);
  const [error, setError] = useState("");
  const [steps, setStep] = useState({
    stepsItems: ["Wallet name", "Connect", "Finish"],
    currentStep: 1,
  });

  const [stepStore, setStepStore] = useState<IStepStore>({
    walletName: "",
    id: "",
    password: "",
  });

  const stepData = [
    {
      component: <StepOne stepStore={stepStore} setStepStore={setStepStore} />,
    },
    {
      component: <StepTwo stepStore={stepStore} setStepStore={setStepStore} />,
    },
    {
      component: <StepThree stepStore={stepStore} />,
    },
  ];

  const handleFinish = async () => {
    const { walletName, id, password } = stepStore;

    if (!walletName && !id && !password) {
      return setError("Please fill all the fields");
    }

    try {
      const result = await addWallet({ walletName, id, password });

      if (result.statusCode === 200 && result.status) {
        const currentUser = await getProfile();
        context.setUser({ ...currentUser?.data });

        setError("");
        toast.success(result.message);
      }

      if (!result.status) {
        setError("");
        toast.error(result.message);
        return;
      }
    } catch (err: any) {
      setError(err.message);
    }

    // reset step
    setStep({
      ...steps,
      currentStep: 1,
    });

    // reset values
    setStepStore({
      walletName: "",
      id: "",
      password: "",
    });

    // close modal
    setShowWalletModal(false);
  };

  const handleCancel = () => {
    // reset values
    setStepStore({
      walletName: "",
      id: "",
      password: "",
    });

    setError("");
    setShowWalletModal(false);
  };

  const handleNext = () => {
    const { walletName, id, password } = stepStore;

    //check values
    if (steps.currentStep === 1 && !walletName)
      return setError("wallet name is required");

    if (steps.currentStep === 2 && !id) return setError("id is required");

    if (steps.currentStep === 2 && !password)
      return setError("password is required");

    setError("");
    if (steps.currentStep < steps.stepsItems.length) {
      setStep({
        ...steps,
        currentStep: steps.currentStep + 1,
      });
    }
  };

  const handlePrev = () => {
    setError("");
    if (steps.currentStep > 1) {
      setStep({
        ...steps,
        currentStep: steps.currentStep - 1,
      });
    }
  };

  return (
    <div
      className={`${
        showWalletModal ? "scale-100 opacity-100" : "scale-0 opacity-0"
      } fixed top-0 left-0 bg-[#00000060] h-screen w-screen z-50 duration-200 overflow-hidden`}>
      <div className="border border-black w-full h-full rounded-md relative">
        <div className="absolute max-w-[1000px] w-[95%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-full bg-white mx-auto md:px-0 px-3 py-5 rounded-md">
            <ul
              aria-label="Steps"
              className="items-center text-gray-600 font-medium md:flex px-3">
              {steps.stepsItems.map((item, idx) => (
                <li
                  key={idx}
                  aria-current={steps.currentStep == idx + 1 ? "step" : false}
                  className="flex-1 last:flex-none flex gap-x-2 md:items-center">
                  <div className="flex items-center flex-col gap-x-2">
                    <div
                      className={`w-8 h-8 rounded-full border-2 flex-none flex items-center justify-center ${
                        steps.currentStep > idx + 1
                          ? "bg-indigo-600 border-indigo-600"
                          : "" || steps.currentStep == idx + 1
                          ? "border-indigo-600"
                          : ""
                      }`}>
                      <span
                        className={` ${
                          steps.currentStep > idx + 1
                            ? "hidden"
                            : "" || steps.currentStep == idx + 1
                            ? "text-indigo-600"
                            : "text-gray-600"
                        }`}>
                        {idx + 1}
                      </span>
                      {steps.currentStep > idx + 1 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 text-white">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                      ) : (
                        ""
                      )}
                    </div>
                    <hr
                      className={`h-12 border md:hidden ${
                        idx + 1 == steps.stepsItems.length
                          ? "hidden"
                          : "" || steps.currentStep > idx + 1
                          ? "border-indigo-600"
                          : ""
                      }`}
                    />
                  </div>
                  <div className="h-8 flex items-center md:h-auto">
                    <h3
                      className={`text-sm ${
                        steps.currentStep == idx + 1
                          ? "text-indigo-600 font-semibold"
                          : "text-gray-600"
                      }`}>
                      {item}
                    </h3>
                  </div>
                  <hr
                    className={`hidden mr-2 w-full border md:block ${
                      idx + 1 == steps.stepsItems.length
                        ? "hidden"
                        : "" || steps.currentStep > idx + 1
                        ? "border-indigo-600"
                        : ""
                    }`}
                  />
                </li>
              ))}
            </ul>

            <div className="mx-10 flex flex-col justify-center">
              {stepData[steps.currentStep - 1].component}
              <div className="text-center mt-2">
                <span className="text-red-600">{error}</span>
              </div>
            </div>

            <div className="mt-10 flex justify-center space-x-5">
              <button
                onClick={steps.currentStep == 1 ? handleCancel : handlePrev}
                className="bg-gray-200 text-gray-500 py-2 px-4 rounded-md ml-4">
                {steps.currentStep == 1 ? "Cancel" : "Previous"}
              </button>

              <button
                onClick={
                  steps.currentStep == steps.stepsItems.length
                    ? handleFinish
                    : handleNext
                }
                className="bg-indigo-600 text-white py-2 px-4 rounded-md">
                {steps.currentStep == steps.stepsItems.length
                  ? "Finish"
                  : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWallet;
