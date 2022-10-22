import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { FaTrash, FaPlus } from "react-icons/fa";
import { v4 } from 'uuid';

function Sentence(props) {
    const [sentence, setSentence] = useState({text:"", audio:""});
    

    const handleChange = (event) => {
        const {name, value} = event.target;
        setSentence((prevValue) => {
      return {...prevValue, [name]: value};
    });
    }
    const handleAdd = () => {
        props.addSentence(sentence)
        const prevSentence = sentence;
        setSentence({id:prevSentence.id, text:"", audio:""});
    }

    



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
                  <Form.Control name="audio" onChange={handleChange} className="mb-3" type="file" value={sentence.audio} />
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