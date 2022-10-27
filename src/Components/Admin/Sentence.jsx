import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addSentence } from "/src/redux.jsx";

function Sentence(props) {
  const [sentence, setSentence] = useState({ text: "", audio: "" });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSentence((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };
  const handleAdd = () => {
    dispatch(addSentence(sentence));
    setSentence({ text: "", audio: "" });
  };

  return (
    <div>
      <Form.Label as="h6">Texte :</Form.Label>
      <Form.Control
        name="text"
        onChange={handleChange}
        value={sentence.text}
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
        value={sentence.audio}
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

export default Sentence;
