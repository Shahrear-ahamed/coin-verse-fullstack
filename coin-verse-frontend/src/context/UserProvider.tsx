import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import UserContext from "./userContext";


const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);

  const getCurrentUser = async () => {
    const response = await fetch("http://localhost:3000/api/user");
    return await response.json();
  };

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/v1/auth/current-user",
          {
            method: "GET",
            credentials: "include",
          }
        );
        const currentUser = await response.json();

        setUser({ ...currentUser });
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
