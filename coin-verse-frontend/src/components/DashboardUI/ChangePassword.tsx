import { UserContextType } from "@/context/userContext";
import { changePassword } from "@/service/apiRequest";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

interface IChangePassword {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

function ChangePassword({ context }: { context: UserContextType }) {
  const { register, handleSubmit, reset } = useForm<IChangePassword>();

  // password
  const [isCurrentPasswordHidden, setIsCurrentPasswordHidden] = useState(true);
  const [isNewPasswordHidden, setIsNewtPasswordHidden] = useState(true);
  const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(true);

  // change toggle button
  const [isChange, setIsChange] = useState(false);

  const toggleEdit = () => {
    setIsChange(!isChange);
  };

  const onSubmit = async (data: IChangePassword) => {
    // Update user data in the database or API here
    if (
      isChange &&
      data.currentPassword &&
      data.newPassword == data.confirmPassword
    ) {
      const passData = {
        oldPassword: data.currentPassword,
        newPassword: data.newPassword,
      };

      const result = await changePassword(passData);

      if (result.statusCode === 200 && result.status) {
        toast.success(result.message);
        reset();
        return;
      }
      toast.error(result.message);

      setIsChange(false);
    }
  };

  return (
    <div className="w-full max-w-[370px] border border-white rounded-md shadow-lg shadow-gray-800 p-7">
      <h4 className="text-xl text-white mb-10">Change password</h4>
      <form
        className="flex flex-col space-y-5 items-center"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full">
          <label htmlFor="dateOfBirth" className="block pb-1 text-white">
            Current Password
          </label>
          <div className="relative w-full mt-2">
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
            <input
              type={isCurrentPasswordHidden ? "password" : "text"}
              disabled={!isChange}
              placeholder="Enter your password"
              {...register("currentPassword")}
              className="w-full px-2 py-1 text-gray-500 outline-none bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent"
            />
          </div>
        </div>

        <div className="w-full">
          <label htmlFor="newPassword" className="block pb-1 text-white">
            New Password
          </label>
          <div className="relative w-full mt-2">
            <button
              className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600"
              onClick={() => setIsNewtPasswordHidden(!isNewPasswordHidden)}>
              {isNewPasswordHidden ? (
                <FaEye className="eye_color text-lg" />
              ) : (
                <FaEyeSlash className="eye_color text-lg" />
              )}
            </button>
            <input
              type={isNewPasswordHidden ? "password" : "text"}
              disabled={!isChange}
              placeholder="Enter new password"
              {...register("newPassword")}
              className="w-full px-2 py-1 text-gray-500 outline-none bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent"
            />
          </div>
        </div>

        <div className="w-full">
          <label htmlFor="confirmPassword" className="block pb-1 text-white">
            Confirm Password
          </label>
          <div className="relative w-full mt-2">
            <button
              className="text-gray-400 absolute right-3 inset-y-0 my-auto active:text-gray-600"
              onClick={() =>
                setIsConfirmPasswordHidden(!isConfirmPasswordHidden)
              }>
              {isConfirmPasswordHidden ? (
                <FaEye className="eye_color text-lg" />
              ) : (
                <FaEyeSlash className="eye_color text-lg" />
              )}
            </button>
            <input
              type={isConfirmPasswordHidden ? "password" : "text"}
              disabled={!isChange}
              placeholder="Enter confirm password"
              {...register("confirmPassword")}
              className="w-full px-2 py-1 text-gray-500 outline-none bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent"
            />
          </div>
        </div>

        {/* // button  */}
        <div className="flex space-x-5 w-full justify-end">
          <button
            type="button"
            className={`py-1 px-3 rounded-md ${
              isChange ? "bg-orange-600" : "bg-green-400 text-black"
            }`}
            onClick={toggleEdit}>
            {isChange ? "Cancel" : "Edit"}
          </button>

          {isChange && (
            <button
              type="submit"
              className="bg-green-400 text-black py-1 px-3 rounded-md">
              Update
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
