import React, { useState } from "react";
import { FaTrash, FaEdit, FaSave } from "react-icons/fa";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editAnswerChoice, deleteAnswerChoice } from "/src/redux.jsx";

function AnswerChoiceAdded(props) {
  const dispatch = useDispatch();

  const [answerChoice, setAnswerChoice] = useState(props.answerChoice);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnswerChoice((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const [editMode, setEditMode] = useState(false);

  const handleEditSave = () => {
    setEditMode(!editMode);
    if (editMode == true) {
      dispatch(
        editAnswerChoice({
          answerChoice: answerChoice,
          question: props.question,
        })
      );
    }
  };
  const handleRemoveAnswerChoice = () => {
    dispatch(
      deleteAnswerChoice({
        answerChoice: answerChoice,
        question: props.question,
      })
    );
  };

  return (
    <div>
      <Row>
        <Col xs={4}>
          {editMode ? (
            <Form.Control
              onChange={handleChange}
              value={answerChoice.text}
              required
              className="mb-2"
              type="text"
              name="text"
            />
          ) : (
            <p style={{ fontSize: "18px" }}>{answerChoice.text}</p>
          )}
        </Col>
        <Col xs={3}>
          {editMode ? (
            <Form.Control
              value={answerChoice.audio}
              name="audio"
              onChange={handleChange}
              required
              className="mb-2"
              type="text"
            />
          ) : (
            <p style={{ fontSize: "18px" }}>{answerChoice.audio}</p>
          )}
        </Col>
        <Col xs={3}>
          {editMode ? (
            <Form.Control
              value={answerChoice.image}
              name="image"
              onChange={handleChange}
              required
              className="mb-2"
              type="text"
            />
          ) : (
            <p style={{ fontSize: "18px" }}>{answerChoice.image}</p>
          )}
        </Col>
        <Col xs={1}>
          <Button onClick={handleEditSave} variant="primary">
            {editMode ? <FaSave size={16} /> : <FaEdit size={16} />}
          </Button>
        </Col>
        <Col xs={1}>
          <Button onClick={handleRemoveAnswerChoice} variant="danger">
            <FaTrash size={16} />
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default AnswerChoiceAdded;
