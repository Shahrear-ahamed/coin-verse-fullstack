import userLogo from "@/assets/user.png";
import { UserContextType } from "@/context/userContext";
import { changeProfile } from "@/service/apiRequest";
import moment from "moment";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface IProfileDetails {
  name: string;
  contactNo: string;
  dateOfBirth: string;
  email: string;
}

function ProfileDetails({ context }: { context: UserContextType }) {
  const { register, handleSubmit, reset } = useForm<IProfileDetails>();

  // user data
  const user = context?.user;
  const dateOfBirth = moment(user?.dateOfBirth).format("YYYY-MM-DD");

  // details
  const [isEditingPDetails, setIsEditingPDetails] = useState(false);

  const onSubmit = async (data: IProfileDetails) => {
    const updateData = {
      name: data.name || user?.name,
      contactNo: data.contactNo || user?.contactNo,
      dateOfBirth: data.dateOfBirth || user?.dateOfBirth,
    };

    const result = await changeProfile(updateData);

    if (result.statusCode === 200 && result.status) {
      context.setUser(result.data);
      toast.success(result.message);
      reset();
      setIsEditingPDetails(false);
      return;
    }
    toast.error(result.message);
  };

  const toggleEdit = () => {
    setIsEditingPDetails(!isEditingPDetails);
  };

  return (
    <div className="w-full max-w-[370px]">
      <h4 className="text-xl text-white mb-10">Personal Details</h4>
      <form
        className="flex flex-col space-y-5 items-center "
        onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex justify-center">
          <Image src={userLogo} width={100} height={100} alt="profile" />
        </div>

        <div className="w-full">
          <label htmlFor="name" className="block pb-1 text-white">
            Name
          </label>
          <input
            type="text"
            disabled={!isEditingPDetails}
            placeholder="your name"
            id="name"
            defaultValue={user?.name}
            {...register("name")}
            className="w-full px-2 py-1 text-gray-500 outline-none bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent"
          />
        </div>
        <div className="w-full">
          <label htmlFor="email" className="block pb-1 text-white">
            Email
          </label>
          <input
            type="email"
            disabled={true}
            placeholder="yourmail@mail.com"
            id="email"
            value={user?.email}
            className="w-full px-2 py-1 text-gray-500 outline-none bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent"
            {...register("email")}
          />
        </div>
        <div className="w-full">
          <label htmlFor="contactNo" className="block pb-1 text-white">
            Contact Number
          </label>
          <input
            type="number"
            disabled={!isEditingPDetails}
            placeholder="contact number"
            id="contactNo"
            defaultValue={user?.contactNo}
            {...register("contactNo")}
            className="w-full px-2 py-1 text-gray-500 outline-none bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent appearance-none"
          />
        </div>
        <div className="w-full">
          <label htmlFor="dateOfBirth" className="block pb-1 text-white">
            Date of Birth
          </label>
          <input
            type="date"
            disabled={!isEditingPDetails}
            placeholder="dd/mm/yyyy"
            id="dateOfBirth"
            defaultValue={dateOfBirth}
            {...register("dateOfBirth")}
            className="w-full px-2 py-1 text-gray-500 outline-none bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent"
          />
        </div>

        <div className="flex space-x-5 w-full justify-end">
          <button
            type="button"
            className={`py-1 px-3 rounded-md ${
              isEditingPDetails ? "bg-orange-600" : "bg-green-400 text-black"
            }`}
            onClick={toggleEdit}>
            {isEditingPDetails ? "Cancel" : "Edit"}
          </button>

          {isEditingPDetails && (
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

export default ProfileDetails;
