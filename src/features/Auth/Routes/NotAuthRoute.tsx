import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

import useAuth from "../hooks/useAuth";

const NotAuthRoute = () => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) navigate("/");
  }, [isAuth, navigate]);
  if (isAuth) return null;
  return <Outlet />;
};
export default NotAuthRoute;
