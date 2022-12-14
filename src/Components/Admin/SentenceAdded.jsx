import React, { useState } from "react";
import { FaTrash, FaEdit, FaSave } from "react-icons/fa";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editSentence, removeSentence } from "/src/redux.jsx";

function SentenceAdded(props) {
  const sentenceCopy = props.sentence;
  const [sentence, setSentence] = useState(sentenceCopy);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSentence((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const [editMode, setEditMode] = useState(false);

  const handleEditSave = () => {
    setEditMode(!editMode);
    if (editMode == true) {
      dispatch(editSentence(sentence));
    }
  };
  const handleRemoveSentence = () => {
    dispatch(removeSentence(props.sentence.id));
  };

  return (
    <div>
      <Row>
        <Col xs={5}>
          {editMode ? (
            <Form.Control
              onChange={handleChange}
              value={sentence.text}
              required
              className="mb-2"
              type="text"
              name="text"
            />
          ) : (
            <p style={{ fontSize: "18px" }}>{sentence.text}</p>
          )}
        </Col>
        <Col xs={5}>
          {editMode ? (
            <Form.Control
              name="audio"
              onChange={handleChange}
              required
              className="mb-2"
              type="text"
              value={sentence.audio}
            />
          ) : (
            <p style={{ fontSize: "18px" }}>{sentence.audio}</p>
          )}
        </Col>

        <Col xs={1}>
          <Button onClick={handleEditSave} variant="primary">
            {editMode ? <FaSave size={16} /> : <FaEdit size={16} />}
          </Button>
        </Col>
        <Col xs={1}>
          <Button onClick={handleRemoveSentence} variant="danger">
            <FaTrash size={16} />
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default SentenceAdded;
