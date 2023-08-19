import { createContext, Dispatch, SetStateAction } from "react";

type IUser = {
  userId: string;
  name: string;
  email: string;
  contactNo: string;
  dateOfBirth: Date;
  balance: number;
  role: string;
};

export interface UserContextType {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<null>>;
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export default UserContext;
