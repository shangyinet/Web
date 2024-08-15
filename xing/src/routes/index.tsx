import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./login";
import Root from "./root";
import { RouterUrl } from "./routesData";
import { ConfigProvider, ThemeConfig } from "antd";

const router = createBrowserRouter([
  { path: "/", element: <Root></Root> },
  { path: RouterUrl.login, element: <Login></Login> },
]);

const theme: ThemeConfig = {
  components: {
    Menu: {
      itemColor: "red",
      itemSelectedColor: "yellow",
      itemBorderRadius: 0,
    },
  },
};
export default function Router() {
  return (
    <ConfigProvider
    // theme={theme}
    >
      <RouterProvider router={router}></RouterProvider>
    </ConfigProvider>
  );
}
