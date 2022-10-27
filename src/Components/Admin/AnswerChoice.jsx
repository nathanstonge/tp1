import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addAnswerChoice } from "/src/redux.jsx";

function AnswerChoice(props) {
  const [answerChoiceInfos, setAnswerChoiceInfos] = useState({
    text: "",
    audio: "",
    image: "",
    questionId: props.question.id,
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnswerChoiceInfos((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const handleAdd = () => {
    dispatch(addAnswerChoice(answerChoiceInfos));
    setAnswerChoiceInfos({
      text: "",
      audio: "",
      image: "",
      questionId: props.question.id,
    });
  };

  return (
    <div>
      <Form.Label as="h6">Texte :</Form.Label>
      <Form.Control
        onChange={handleChange}
        value={answerChoiceInfos.text}
        name="text"
        placeholder="Entrez la phrase"
        required
        className="mb-3"
        type="text"
      />
      <Form.Label as="h6">Audio :</Form.Label>
      <Form.Control
        onChange={handleChange}
        value={answerChoiceInfos.audio}
        name="audio"
        className="mb-2"
        placeholder="Entrez la source de l'audio"
        type="text"
      />
      <Form.Label as="h6">Source image :</Form.Label>
      <Form.Control
        onChange={handleChange}
        value={answerChoiceInfos.image}
        name="image"
        className="mb-2"
        placeholder="Entrez la source de l'image"
        type="text"
      />
      <Row className="mt-3">
        <Col className="text-center">
          <Button onClick={handleAdd} variant="success" className="mb-1">
            <FaPlus size={16} /> Ajouter
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default AnswerChoice;
