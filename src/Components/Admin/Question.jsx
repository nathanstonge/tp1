import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { FaTrash, FaPlus } from "react-icons/fa";
import AnswerChoice from "./AnswerChoice";
import { v4 } from "uuid";
import { useSelector } from "react-redux";

function Question(props) {
  // const connectedUser = useSelector(state => state.sessionUser);
  // const [answerChoices, setAnswerChoices] = useState([
  //   { id: 1, text: "", audio: "", image: "" },
  //   { id: 2, text: "", audio: "", image: "" },
  //   { id: 3, text: "", audio: "", image: "" },
  //   { id: 4, text: "", audio: "", image: "" },
  // ]);
  // let _text, _audio, _answer;
  // const [text, setText] = useState("");
  // useEffect(() => {
  //   if(connectedUser.editMode == true){
  //     setAnswerChoices(props.question.answerChoices);
  //     setText(props.question.text);
  //   }

  // });

  // const [answer, setAnswer] = useState("");

  // const replaceAnswerChoices = (id, answerChoice) => {
  //   const answerChoicesCopy = answerChoices;
  //   const index = answerChoices.findIndex((a) => a.id == id);
  //   answerChoicesCopy[index] = answerChoice;
  //   return answerChoicesCopy;
  // };

  // const handleChangeAnswerChoice = (answerChoice) => {
  //   switch (answerChoice.id) {
  //     case "1":
  //       setAnswerChoices(replaceAnswerChoices(1, answerChoice));
  //       break;
  //     case "2":
  //       setAnswerChoices(replaceAnswerChoices(2, answerChoice));

  //       break;
  //     case "3":
  //       setAnswerChoices(replaceAnswerChoices(3, answerChoice));

  //       break;
  //     case "4":
  //       setAnswerChoices(replaceAnswerChoices(4, answerChoice));

  //       break;
  //   }
  // };

  // const handleChange = () => {
  //   // setText(text);
  //   const question = {
  //     id: props.number,
  //     text: _text.value,
  //     audio: _audio.value,
  //     answer: _answer.value,
  //     answerChoices: answerChoices,
  //   };
  //   props.handleChangeQuestion(question);
  // };
  const [questionInfos, setQuestionInfos] = useState({text: "", audio:""});

  const handleChange = (event) => {
    const {name, value} = event.target;
    setQuestionInfos((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const handleAdd = () => {
    props.handleAddQuestion(questionInfos);
    setQuestionInfos({text: "", audio:""});
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
        onChange={handleChange}
        className="mb-3"
        type="file"
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

    /* <Card className="mt-5">
        <Card.Header as="h2"> Question </Card.Header>
        <Card.Body className="p-4">
          <Form.Label as="h6">Texte :</Form.Label>
          <Form.Control
            onChange={handleChange}
            ref={(input) => (_text = input)}
            // value={text}
            placeholder="Entrez la question"
            required
            className="mb-3"
            type="text"
          />
          <Form.Label as="h6">Audio :</Form.Label>
          <Form.Control
            ref={(input) => (_audio = input)}
            className="mb-4"
            type="file"
          />
          <Row>
            <Col className="pt-1">
              <Form.Label as="h6">Réponse :</Form.Label>
            </Col>

            <Col xs={10} className="mb-2">
              <Form.Select
                size="sm"
                onChange={handleChange}
                ref={(input) => (_answer = input)}
              >
                <option>Sélectionner le numéro de la réponse...</option>
                <option value="1">Choix 1</option>
                <option value="2">Choix 2</option>
                <option value="3">Choix 3</option>
                <option value="4">Choix 4</option>
              </Form.Select>
            </Col>
          </Row>

          <AnswerChoice number="1" setAnswerChoice={handleChangeAnswerChoice} />
          <AnswerChoice number="2" setAnswerChoice={handleChangeAnswerChoice} />
          <AnswerChoice number="3" setAnswerChoice={handleChangeAnswerChoice} />
          <AnswerChoice number="4" setAnswerChoice={handleChangeAnswerChoice} />
        </Card.Body>
      </Card> */
  );
}

export default Question;
