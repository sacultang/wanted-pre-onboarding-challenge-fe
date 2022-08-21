import React, { createContext, ReactNode, useState } from "react";
import { UserContextType } from "../types/AuthType";
export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

const ProviderUser = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user") || "{}")
  );
  return (
    <UserContext.Provider value={{ setUser, user }}>
      {children}
    </UserContext.Provider>
  );
};
export default ProviderUser;
