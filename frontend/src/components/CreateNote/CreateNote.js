import React from "react";
//import "./STYLES.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import { Row, Col, Button, Select, Input } from "antd";
import useCreateNote from "./useCreateNote.js";

const { TextArea } = Input;
const { Option } = Select;

const CreateNote = props => {
  const paramId = props.match.params.id || null;
  const {
    createNote,
    users,
    date,
    title,
    handleDate,
    handleInputChange,
    userSelected,
    content
  } = useCreateNote(paramId);
  if (!users) return null;
  return (
    <Row>
      <Col span={12}>
        <div>
          <h4>Create note</h4>

          <div>
            <Select
              onChange={value => handleInputChange(value, "userSelected")}
              value={userSelected}
            >
              {users.map((user, index) => (
                <Option key={index}>{user.username}</Option>
              ))}
            </Select>
          </div>
          <div>
            <Input
              type="text"
              placeholder="title"
              className="form-control"
              onChange={e => handleInputChange(e, "title")}
              value={title}
              required
            />
          </div>
          <div className="form-group">
            <TextArea
              placeholder="content"
              onChange={e => handleInputChange(e, "content")}
              value={content}
              row="6"
              required
            />
          </div>
          <div className="form-group">
            <DatePicker
              className="form-control"
              onChange={handleDate}
              selected={Date.parse(date)}
            />
          </div>
          <Button onClick={createNote}>Add note</Button>
        </div>
      </Col>
    </Row>
  );
};

export default CreateNote;
