import { Image, Layout, Menu, MenuProps } from "antd";
import { useState } from "react";
import Manuscript from "../../../manuscript";
import Question from "../../../question";
import LiveBroadcast from "../../../liveBroadcast";
import { logoDivStyle, menuStyle } from "./style";

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];
const menuItems: MenuItem[] = [
  { key: "manuscripts", label: "文案" },
  { key: "questions", label: "问答" },
  { key: "liveBroadcast", label: "直播" },
];

export function CustomLayout() {
  const [key, setKey] = useState("liveBroadcast");

  return (
    <Layout>
      <Sider>
        <div style={logoDivStyle}>
          <Image
          preview={false}
            src={require("/Users/shangyinet/Desktop/Web/Web/xing/src/asstes/images/logo.png")}
            style={{ width: 100, height: 40 }}
          ></Image>
        </div>
        <Menu
          style={menuStyle}
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
      {props.itemKey === "manuscripts" && <Manuscript></Manuscript>}
      {props.itemKey === "questions" && <Question></Question>}
      {props.itemKey === "liveBroadcast" && <LiveBroadcast></LiveBroadcast>}
    </Content>
  );
}
