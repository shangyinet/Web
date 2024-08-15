import { Layout, Menu, MenuProps } from "antd";

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
        <Menu
          items={menuItems}
          onClick={({ key }) => {
            setKey(key);
          }}
        />
      </Sider>
      <Content style={{ height: "100vh" }}>
        <CustomContent itemKey={key}></CustomContent>
      </Content>
    </Layout>
  );
}

function CustomContent(props: { itemKey: string }) {
  return (
    <>
      {props.itemKey === RouterUrl.manuscripts && <Manuscripts></Manuscripts>}
      {props.itemKey === RouterUrl.questions && <Question></Question>}
      {props.itemKey === RouterUrl.liveBroadcast && (
        <LiveBroadcast></LiveBroadcast>
      )}
    </>
  );
}
