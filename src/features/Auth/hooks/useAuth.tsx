import { useContext } from "react";

import AuthContext from "../context/AuthContext";
import logoutRequest from "../services/logoutRequest";
import { AuthStatus } from "../types/User";

const useAuth = () => {
  const user = useContext(AuthContext);
  if (!user) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  const login = (email: string) => {
    user.setInfo({
      email,
      authStatus: AuthStatus.AUTHENTICATED,
    });
  };

  const logout = async () => {
    await logoutRequest();
    user.setInfo({
      email: "",
      authStatus: AuthStatus.NOT_AUTHENTICATED,
    });
  };

  const isAuth = user.info.authStatus === AuthStatus.AUTHENTICATED;

  return { user, login, logout, isAuth };
};
export default useAuth;
