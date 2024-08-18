import { Button, Flex, Table } from "antd";

export function LiveProgress() {
  return (
    <Flex
      align="center"
      vertical
      style={{
        width: "100%",
        marginTop: 40,
        // borderColor: "gray",
        // border: "1px ridge black",
      }}
    >
      <h2>直播实时进度</h2>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        style={{ width: "100%" }}
      />
      <Flex align="center" gap={50} style={{ marginTop: 50, marginBottom: 20 }}>
        <Button>暂停</Button>
        <Button type="primary">播放</Button>
      </Flex>
    </Flex>
  );
}

const dataSource = [
  {
    key: "1",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
  },
  {
    key: "2",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
];

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
  },
];
