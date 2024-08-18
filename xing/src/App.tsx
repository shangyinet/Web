import "./App.css";

import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import { Router } from "./config/routeConfig";
import { themeConfig } from "./config/themeConfig";
import { useEffect } from "react";

function App() {
  useEffect(()=>{
    console.log('APPPPPPPP');
    
  },[])
  return (
    <ConfigProvider theme={themeConfig}>
      <RouterProvider router={Router}></RouterProvider>
    </ConfigProvider>
  );
}

export default App;
