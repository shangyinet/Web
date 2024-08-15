import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import LiveBroadcast from "./liveBroadcast";
import Login from "./login";
import Manuscripts from "./manuscripts";
import Question from "./questions";
import Root from "./root";
import { RouterUrl } from "./routesData";

const router = createBrowserRouter([
  { path: "/", element: <Root></Root> },
  { path: RouterUrl.login, element: <Login></Login> },
]);

function loadlive() {
  return redirect("/liveBroadcast");
}

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
