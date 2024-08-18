import { Button, Flex, Input } from "antd";

export function LiveHeader() {
  return (
    <Flex gap={30} vertical={false} style={{ width: "100%",marginTop:30}}>
      <Flex gap={30} vertical={false} align="center" style={{ width: "50%" }}>
        <h3 style={{ whiteSpace: "nowrap" }}>直播地址</h3>
        <Input placeholder="请输入直播地址"></Input>
        <Button type="primary">获取直播地址</Button>
      </Flex>
      <Flex gap={30} vertical={false} align="center" style={{ width: "50%" }}>
        <h3 style={{ whiteSpace: "nowrap" }}>直播标题 </h3>
        <Input placeholder="请输入直播地址"></Input>
        <Button type="primary">确定</Button>
      </Flex>
    </Flex>
  );
}
