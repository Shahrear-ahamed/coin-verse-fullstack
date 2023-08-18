import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import UserContext from "./userContext";

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await fetch(`${process.env.url}/auth/current-user`, {
          method: "GET",
          credentials: "include",
        });
        const currentUser = await response.json();

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
