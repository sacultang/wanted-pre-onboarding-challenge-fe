import React, { createContext, ReactNode, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
interface ContextType {
  accessToken: string;
  setAccessToken: React.Dispatch<React.SetStateAction<string>>;
}
export const AuthContext = createContext<ContextType>({
  accessToken: "",
  setAccessToken: () => {},
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      const userData = JSON.parse(localStorage.getItem("accessToken") || "");
      if (userData) {
        setAccessToken(userData);
      }
    }
  }, [navigate]);
  useEffect(() => {
    localStorage.setItem("accessToken", JSON.stringify(accessToken));
  }, [accessToken]);

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
