import { Button, Flex, Table } from "antd";

export function BulieChat() {
  return (
    <Flex vertical={true} style={{width:'100%'}}>
      <h2>实时弹幕</h2>
      <Button type='primary' style={{width:100}}>开始抓取</Button>

      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        style={{ width: "100%",marginTop:30 }}
      />
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
  