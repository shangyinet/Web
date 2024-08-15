import { Image, Layout, Menu, MenuProps } from "antd";

import Manuscripts from "../manuscripts";
import Question from "../questions";
import LiveBroadcast from "../liveBroadcast";
import { RouterUrl } from "../routesData";
import { useState } from "react";

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];
const menuItems: MenuItem[] = [
  { key: RouterUrl.manuscripts, label: "文案" },
  { key: RouterUrl.questions, label: "问答" },
  { key: RouterUrl.liveBroadcast, label: "直播" },
];

export default function Root() {
  const [key, setKey] = useState(RouterUrl.manuscripts);
  return (
    <Layout>
      <Sider>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <Image
            src={require("../../assets/images/logo.png")}
            style={{ width: 100, height: 40 }}
          ></Image>
        </div>
        <Menu
          style={{ height: "100vh" }}
          items={menuItems}
          defaultSelectedKeys={[key]}
          onClick={({ key }) => {
            setKey(key);
          }}
        />
      </Sider>
      <CustomContent itemKey={key}></CustomContent>
    </Layout>
  );
}

function CustomContent(props: { itemKey: string }) {
  return (
    <Content>
      {props.itemKey === RouterUrl.manuscripts && <Manuscripts></Manuscripts>}
      {props.itemKey === RouterUrl.questions && <Question></Question>}
      {props.itemKey === RouterUrl.liveBroadcast && (
        <LiveBroadcast></LiveBroadcast>
      )}
    </Content>
  );
}
