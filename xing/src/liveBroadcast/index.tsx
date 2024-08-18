import { Button, Flex, Input } from "antd";
import { useEffect } from "react";
import { LiveProgress } from "./components/liveProgressFlex";
import { LiveHeader } from "./components/liveHeaderFlex";
import { AnsterFlex } from "./components/ansterFlex";
import { BulieChat } from "./components/bulletChat";
import { Text20 } from "../components/text";

export default function LiveBroadcast() {
  return (
    <Flex
      justify="center"
      align="center"
      vertical
      style={{ width: "98%", marginLeft: "1%" }}
    >
      {/* 地址，标题 */}
      <LiveHeader></LiveHeader>
      {/* 直播实时进度  */}
      <LiveProgress></LiveProgress>
      {/* 脚本 */}
      <AnsterFlex></AnsterFlex>
      {/* 实时弹幕 */}
      <BulieChat></BulieChat>
    </Flex>
  );
}
