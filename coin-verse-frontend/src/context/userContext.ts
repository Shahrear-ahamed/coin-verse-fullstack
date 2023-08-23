import { IStepStore } from "@/interface/share";
import { createContext, Dispatch, SetStateAction } from "react";

export type IUser = {
  role?: string;
  name?: string;
  email?: string;
  userId?: string;
  contactNo?: string;
  dateOfBirth?: Date;
  balance?: number;
  myWallets?: IStepStore[];
  showSignUpBonus?: boolean;
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
