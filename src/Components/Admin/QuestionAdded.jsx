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
import AnswerChoiceAdded from "./AnswerChoiceAdded";
import { v4 } from "uuid";

function QuestionAdded(props) {
  const [question, setQuestion] = useState(props.question);

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
      const questions = props.questions;
      const index = questions.findIndex((q) => q.id == question.id);
      questions[index] = question;
      props.setQuestions(questions);
    }
  };
  const handleRemoveQuestion = () => {
    props.handleRemoveQuestion(props.question.id);
  };
  
  const [answerChoices, setAnswerChoices] = useState(props.question.answerChoices);
  const handleAddAnswerChoice = (answerChoice) => {
    const newAnswerChoice = {
      id: v4(),
      text: answerChoice.text,
      audio: answerChoice.audio,
      image: answerChoice.image,
    };
    console.log(newAnswerChoice);
    setAnswerChoices((prevValue) => {
      return [...prevValue, newAnswerChoice];
    });
   
    console.log(answerChoices);
    // setQuestion(prevValue => {return {...prevValue, answerChoices: answerChoices}});
    

  };
  const handleRemoveAnswerChoice = (id) => {
    setAnswerChoices((prevValues) => {
      return prevValues.filter((a) => {
        return a.id != id;
      });
    });
  };
  const handleLinkAnswerChoiceToQuestion = (id) => {
    

  }




  return (
    <div>
      <Row>
        <Col>
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
            <p style={{ fontSize: "18px" }}>{question.audio}</p>
          )}
        </Col>
        <Col>
          <Row>
            <Col>
              <Form.Label># Réponse: </Form.Label>
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
              <AnswerChoice handleAddAnswerChoice={handleAddAnswerChoice} />
              <hr />

              {answerChoices.map(a => <AnswerChoiceAdded key={a.id} answerChoice={a} answerChoices={answerChoices} setAnswerChoices={setAnswerChoices} handleRemoveAnswerChoice={handleRemoveAnswerChoice} />)}
              <Row className="text-center mt-1">
              <Col>
          <Button onClick={handleLinkAnswerChoiceToQuestion} variant="success">
            <FaLink size={16} />
          </Button>
        </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default QuestionAdded;
