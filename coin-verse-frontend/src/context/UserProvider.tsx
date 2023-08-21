import { getProfile } from "@/service/apiRequest";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import UserContext from "./userContext";

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const currentUser = await getProfile();

        setUser({ ...currentUser?.data });
      } catch (err) {
        toast.error("something went wrong");
      }
    };

    getCurrentUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
