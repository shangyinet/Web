import { Button, Flex, Input } from "antd";
import { useEffect } from "react";
import { LiveProgress } from "./components/liveProgress";

export default function LiveBroadcast() {
  return (
    <Flex justify="center" align="center" vertical>
      <Flex gap={30} vertical={false} style={{ width: "98%" }}>
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

      {/* 直播实时进度  */}
      <LiveProgress></LiveProgress>
    </Flex>
  );
}
