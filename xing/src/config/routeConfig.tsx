import { createBrowserRouter, Navigate, redirect } from "react-router-dom";
import Root from "../routes/root";
import Login from "../routes/login";
import { UserStore } from "../store/userStore";

// 路由配置文件
export const RouterUrl = {
  root: "/",
  login: "login",
};

const loader = () => {
  const loginState = UserStore.loginState;
  console.log("------------>>", loginState);

  if (!loginState) {
    return redirect("/login");
  }
  return null;
};
export const Router = createBrowserRouter([
  {
    path: RouterUrl.root,
    element: <Root></Root>,
    loader: loader,
  },
  {
    path: RouterUrl.login,
    element: <Login></Login>,
  },
]);
