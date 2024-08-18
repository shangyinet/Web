import React from "react";
import { Button } from "antd";

import { observer } from "mobx-react-lite";
import { UserStore } from "../store/userStore";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { TimeUtils } from "../utils/utils";
import { RouterUrl } from "../config/routeConfig";

function Manuscript() {
  const navigate = useNavigate();
 
  return (
    <div>
      {TimeUtils.convertTimestampToTime(
        1703300000000,
        TimeUtils.TimeFormatYMDHMS
      )}
      {UserStore.userInfo.userName}
      <Button
      type= 'default'
      style={{color:'red'}}
        onClick={() => {

        }}
      >
        登录
      </Button>
      <Button
        onClick={() => {
          navigate(RouterUrl.login)
        }}
      >
        去登录
      </Button>
      <Button
        onClick={() => {
          UserStore.clearUserInof()
        }}
      >
        清除登录状态
      </Button>
    </div>
  );
}

export default observer(Manuscript);
