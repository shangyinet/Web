import { Image, Layout, Menu, MenuProps, Switch } from "antd";

import Manuscripts from "../../manuscript";
import Question from "../../question";
import LiveBroadcast from "../../liveBroadcast";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserStore } from "../../store/userStore";
import { CustomLayout } from "./components/customLayout";
import { RouterUrl } from "../../config/routeConfig";
import { observer } from "mobx-react-lite";

const { Content, Sider } = Layout;

function Root() {
  return (
    <CustomLayout></CustomLayout>
    // <>
    //   {UserStore.loginState && <CustomLayout></CustomLayout>}
    //   {!UserStore.loginState && <Navigate to={RouterUrl.login}></Navigate>}
    // </>
  );
}
export default observer(Root);
