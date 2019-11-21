import React from "react";
//import "./STYLES.css";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import useNotesList from "./useNotesList";
import { Row, Col, Button, Card } from "antd";

const { Meta } = Card;

const NotesList = props => {
  const { notes, handleDelete } = useNotesList();
  if (!notes) return null;
  return (
    <Row>
      {notes.map((note, index) => (
        <Col key={index} span={6}>
          <Card
            actions={[
              <Button type="danger" onClick={() => handleDelete(note._id)}>
                delete
              </Button>,
              <Button type="primary">
                <Link to={"./edit/" + note._id}>Edit</Link>
              </Button>
            ]}
          >
            <Meta title={note.title} description="This is the description" />
            <p>{note.author}</p>
            <p>{note.content}</p>
            <p>{format(note.date)}</p>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default NotesList;
