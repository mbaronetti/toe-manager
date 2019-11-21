import React from "react";
import useCreateUser from "./useCreateUser.js";
import {Button, Row, Col, Input} from 'antd'

const CreateUser = React.memo(props => {
  const {
    users,
    userName,
    handleUserName,
    addUserName,
    deleteUserName
  } = useCreateUser();
  if (!users) return null;
  return (
    <Row>
      <Col span={12}>
        <h3>Create new user</h3>
        <form>
          <div>
            <Input
              type="text"
              onChange={handleUserName}
              value={userName}
            />
          </div>
          <Button onClick={addUserName}>
            Add
          </Button>
        </form>
      </Col>
      <Col span={12}>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <span>Username: {user.username}</span>
              <Button
                type="danger"
                size="small"
                onClick={() => deleteUserName(user._id)}
              >
                delete
              </Button>
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
});

export default CreateUser;
