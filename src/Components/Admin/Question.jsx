import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addQuestion } from "/src/redux.jsx";

function Question(props) {
  const [questionInfos, setQuestionInfos] = useState({ text: "", audio: "" });
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setQuestionInfos((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const handleAdd = () => {
    dispatch(addQuestion(questionInfos));
    setQuestionInfos({ text: "", audio: "" });
  };

  return (
    <div>
      <Form.Label as="h6">Texte :</Form.Label>
      <Form.Control
        name="text"
        onChange={handleChange}
        value={questionInfos.text}
        placeholder="Entrez la phrase"
        required
        className="mb-3"
        type="text"
      />
      <Form.Label as="h6">Audio :</Form.Label>
      <Form.Control
        name="audio"
        placeholder="Entrez la source de l'audio"
        onChange={handleChange}
        className="mb-3"
        type="text"
        value={questionInfos.audio}
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

export default Question;
