import React, { useState } from "react";
import { FaTrash, FaEdit, FaSave } from "react-icons/fa";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import AnswerChoice from "./AnswerChoice";
import AnswerChoiceAdded from "./AnswerChoiceAdded";
import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { editQuestion, deleteQuestion } from "/src/redux.jsx";

function QuestionAdded(props) {
  const [question, setQuestion] = useState(props.question);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setQuestion((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const [editMode, setEditMode] = useState(false);

  const handleEditSave = () => {
    setEditMode(!editMode);
    if (editMode == true) {
      dispatch(editQuestion(question));
    }
  };
  const handleRemoveQuestion = () => {
    dispatch(deleteQuestion(props.question.id));
  };

  return (
    <div>
      <Row>
        <Col xs={4}>
          {editMode ? (
            <Form.Control
              onChange={handleChange}
              value={question.text}
              required
              className="mb-2"
              type="text"
              name="text"
            />
          ) : (
            <p style={{ fontSize: "18px" }}>{question.text}</p>
          )}
        </Col>
        <Col xs={3}>
          {editMode ? (
            <Form.Control
              name="audio"
              onChange={handleChange}
              required
              className="mb-2"
              value={question.audio}
              type="text"
            />
          ) : (
            <p style={{ fontSize: "18px" }}>{question.audio}</p>
          )}
        </Col>
        <Col xs={3}>
          <Row>
            <Col>
              <Form.Label>Réponse: </Form.Label>
            </Col>
            <Col>
              {editMode ? (
                <Form.Control
                  onChange={handleChange}
                  value={question.answer}
                  required
                  className="mb-2"
                  type="text"
                  name="answer"
                />
              ) : (
                <p style={{ fontSize: "18px" }}>{question.answer}</p>
              )}
            </Col>
          </Row>
        </Col>

        <Col xs={1}>
          <Button onClick={handleEditSave} variant="primary">
            {editMode ? <FaSave size={16} /> : <FaEdit size={16} />}
          </Button>
        </Col>
        <Col xs={1}>
          <Button onClick={handleRemoveQuestion} variant="danger">
            <FaTrash size={16} />
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="mb-5 mt-2">
            <Card.Header as="h2"> Choix de réponse </Card.Header>
            <Card.Body className="p-4">
              <AnswerChoice
                question={question}
                handleAddAnswerChoice={props.handleAddAnswerChoice}
                setAnswerChoices={props.setAnswerChoices}
                answerChoices={props.answerChoices}
              />
              <hr />

              {props.question.answerChoices.map((a) => (
                <AnswerChoiceAdded
                  question={props.question}
                  key={v4()}
                  answerChoice={a}
                  answerChoices={props.answerChoices}
                  setAnswerChoices={props.setAnswerChoices}
                  handleRemoveAnswerChoice={props.handleRemoveAnswerChoice}
                />
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default QuestionAdded;
