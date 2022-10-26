import React, { useState } from "react";
import { FaTrash, FaEdit, FaSave, FaLink } from "react-icons/fa";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import AnswerChoice from "./AnswerChoice";

function AnswerChoiceAdded(props) {
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
      const answerChoices = props.answerChoices;
      const index = answerChoices.findIndex((a) => a.id == answerChoice.id);
      answerChoices[index] = answerChoice;
      props.setAnswerChoices(answerChoices);
    }
  };
  const handleRemoveAnswerChoice = () => {
    props.handleRemoveAnswerChoice(answerChoice.id);
  };

  return (
    <div>
      <Row>
        <Col>
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
        <Col>
          {editMode ? (
            <Form.Control
              name="audio"
              onChange={handleChange}
              required
              className="mb-2"
              type="file"
            />
          ) : (
            <p style={{ fontSize: "18px" }}>{answerChoice.audio}</p>
          )}
        </Col>
        <Col>
          {editMode ? (
            <Form.Control
              name="image"
              onChange={handleChange}
              required
              className="mb-2"
              type="file"
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
