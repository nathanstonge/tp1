import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { FaTrash, FaPlus } from "react-icons/fa";

function AnswerChoice(props) {
  // const textInputName = `text${props.number}`;
  // const audioInputName = `audio${props.number}`;
  // const imageInputName = `image${props.number}`;
  const [answerChoiceInfos, setAnswerChoiceInfos] = useState({
    text: "",
    audio: "",
    image: "",
  });
  // let _textInput, _audioInput, _imageInput;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnswerChoiceInfos((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const handleAdd = () => {
    props.handleAddAnswerChoice(answerChoiceInfos);
    setAnswerChoiceInfos({ text: "", audio: "", image: "" });
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
        type="file"
      />
      <Form.Label as="h6">Source image :</Form.Label>
      <Form.Control
        onChange={handleChange}
        value={answerChoiceInfos.image}
        name="image"
        className="mb-2"
        type="file"
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
