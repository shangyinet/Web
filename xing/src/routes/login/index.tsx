import { Button, Flex, Image, Input, Modal } from "antd";
import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { UserStore } from "../../store/userStore";
import { RouterUrl } from "../../config/routeConfig";

export default function Login() {
  const navigate = useNavigate();
  const [account, setAccount] = useState(UserStore.accountInfo.account);
  const [password, setPassword] = useState("");
  const [modalMsg, setmodalMsg] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  //   账号改变
  const accountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount(e.target.value);
  };
  //   密码改变
  const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  //   点击登录
  const loginClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (!account) {
      setmodalMsg("请输入账号");
      setModalOpen(true);
      return;
    }
    if (password.length === 0) {
      setmodalMsg("请输入密码");
      setModalOpen(true);

      return;
    }

    UserStore.saveAccount({ account: account, area: "北京" });
    UserStore.saveUserInfo({userName:'李志',userAge:18})
    navigate(RouterUrl.root);
  };

  return (
    <Flex
      vertical
      align="center"
      justify="center"
      style={{
        height: "100vh",
      }}
    >
      <Image
        src={require("/Users/shangyinet/Desktop/Web/Web/xing/src/asstes/images/logo.png")}
        style={{ width: 200, height: 100 }}
        preview={false}
      ></Image>

      <Input
        prefix={"用户名"}
        placeholder="请输入用户名"
        defaultValue={account}
        onChange={accountChange}
        style={{ width: 300, marginTop: 50 }}
      ></Input>

      <Input.Password
        prefix={"密码"}
        placeholder="请输入密码"
        defaultValue={password}
        onChange={passwordChange}
        style={{ width: 300, marginTop: 20 }}
      ></Input.Password>

      <Button
        type="primary"
        onClick={loginClick}
        style={{ marginTop: 30, width: 300 }}
        block
      >
        登录
      </Button>

      <Modal
        title="提示"
        open={modalOpen}
        closable={false}
        footer={
          <Button
            type="primary"
            onClick={() => {
              setModalOpen(false);
            }}
          >
            OK
          </Button>
        }
      >
        {<p>{modalMsg}</p>}
      </Modal>
    </Flex>
  );
}
