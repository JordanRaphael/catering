import { Col, Row } from "antd";
import React from "react";
import { useState } from "react";
import "../App.css";
import { UserList } from "./UserList";

export interface User {
  name: string;
  money: number;
}

function App() {
  const [selectedUser, setSelectedUser] = useState<User>({
    name: "",
    money: 0,
  });

  const users: User[] = [
    {
      name: "Jo",
      money: 0,
    },
    {
      name: "DoD",
      money: 0,
    },
  ];
  const [count, setCount] = useState(0);

  return (
    // <Row gutter={16} className='antd-row'>
    //   <Col span={12} style={{backgroundColor: 'red', padding: '50px 0'}}>
    <UserList
      users={users}
      selectedUser={selectedUser}
      setSelectedUser={setSelectedUser}
    />
    //   </Col>
    //   <Col span={12}  style={{backgroundColor: 'blue', padding: '50px 0'}}>This is reserved</Col>
    // </Row>
  );
}

export default App;
