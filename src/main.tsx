import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AuthForm from "@/features/Auth/components/AuthForm/AuthForm";
import { AuthProvider } from "@/features/Auth/context/AuthContext";
import AuthRoute from "@/features/Auth/Routes/AuthRoute";
import NotAuthRoute from "@/features/Auth/Routes/NotAuthRoute";

import "./assets/styles/global.scss";
import GiftIdeas from "./features/Gifts/page/GiftIdeas/GiftIdeas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthRoute />,
    children: [
      {
        path: "/auth",
        element: <NotAuthRoute />,
        children: [{ index: true, element: <AuthForm /> }],
      },
      { index: true, element: <GiftIdeas /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
