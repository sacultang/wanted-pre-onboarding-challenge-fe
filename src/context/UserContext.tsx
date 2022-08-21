import React, { createContext, ReactNode, useState } from "react";
import { ContextType } from "../types/AuthType";
export const UserContext = createContext<ContextType | undefined>(undefined);

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
