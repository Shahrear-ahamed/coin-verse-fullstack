import { createContext, Dispatch, SetStateAction } from "react";

type IUser = {
  role: string;
  name: string;
  email: string;
  userId: string;
  contactNo: string;
  dateOfBirth: Date;
  balance: number;
  showSignUpBonus: boolean;
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
