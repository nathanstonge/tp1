import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";


function AnswerChoice(props) {
    // const textInputName = `text${props.number}`;
    // const audioInputName = `audio${props.number}`;
    // const imageInputName = `image${props.number}`;
    // const [answerChoice, setAnswerChoice] = useState({id:props.number});
    let _textInput, _audioInput, _imageInput;

    const handleChange = () => {
        props.setAnswerChoice({id: props.number, text: _textInput.value, audio: _audioInput.value, image: _imageInput.value})
    }

    return (
        <div>
            <Card className="mt-3">
                    <Card.Header as="h6">
                        Choix de réponse {props.number}
                    </Card.Header>
                    <Card.Body>
                    <Form.Label as="h6">Texte :</Form.Label>
                  <Form.Control
                  ref={input => _textInput = input}
                 
                  onChange={handleChange}
                    placeholder="Entrez la phrase"
                    required
                    className="mb-3"
                    type="text"
                  />
                  <Form.Label as="h6">Audio :</Form.Label>
                  <Form.Control onChange={handleChange} ref={input => _audioInput = input} className="mb-2" type="file" />
                  <Form.Label as="h6">Source image :</Form.Label>
                  <Form.Control onChange={handleChange} ref={input => _imageInput = input} className="mb-2" type="file" />
                    </Card.Body>
                  </Card>
        </div>
    );
}

export default AnswerChoice;