import { Button, Flex, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

export function AnsterFlex() {
  return (
    <Flex
      vertical={false}
      gap={50}
      align="center"
      justify="center"
      style={{ marginTop: 30, width: "100%" }}
    >
      <Flex gap={20} align="center" style={{ width: "60%" }}>
        <div style={{ whiteSpace: "nowrap" }}>脚本输入</div>
        <TextArea rows={2} />
      </Flex>

      <Flex align="center" >
        <div style={{ whiteSpace: "nowrap" }}>设置为</div>
        <Input
          variant="borderless"
          defaultValue={1}
          style={{ width: 30 }}
        ></Input>
        <div>段</div>
      </Flex>

      <Button>取消</Button>
      <Button type="primary">确定</Button>
    </Flex>
  );
}
