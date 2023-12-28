import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

import useRequest from "@/hooks/useRequest";

import useAuth from "../hooks/useAuth";
import imAuthRequest from "../services/imAuthRequest";

const AuthRoute = () => {
  const navigate = useNavigate();
  const { isAuth, login, logout } = useAuth();
  const { makeRequest, loading } = useRequest();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await makeRequest(() => imAuthRequest());
      if (!(response instanceof Response)) {
        logout();
        return navigate("/auth");
      }
      const result = await response.json();
      login(result.email);
    };

    if (!isAuth) fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);
  if (loading) return "Loading...";
  return <Outlet />;
};
export default AuthRoute;
