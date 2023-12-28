import { createContext, useState } from "react";

import { AuthStatus, user } from "../types/User";

export interface AuthContextType {
  info: user;
  setInfo: (info: Partial<user>) => void;
}

const AuthContext = createContext<AuthContextType>({
  info: {
    id: 0,
    email: "",
    authStatus: AuthStatus.UNKNOW,
  },
  setInfo: () => {},
});

export default AuthContext;

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [info, setUserInfo] = useState<user>({
    id: 0,
    email: "",
    authStatus: AuthStatus.UNKNOW,
  });

  const setInfo = (info: Partial<user>) => {
    setUserInfo((prevInfo) => ({ ...prevInfo, ...info }));
  };

  return (
    <AuthContext.Provider
      value={{
        info,
        setInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
