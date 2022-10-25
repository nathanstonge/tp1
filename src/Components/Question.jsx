import React from "react";
import { Button, Col, Container, Form, Row, Card } from "react-bootstrap";
import { BiArrowBack } from "react-icons/bi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { GrDocumentSound } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { unuseText } from "/src/redux.jsx";
import { useDispatch, useSelector } from "react-redux";
import Titre from "../Components/Titre";
import NotFoundUser from "/src/Views/NotFoundUser.jsx";
import Phrase from "../Components/Phrase";
import { v4 } from "uuid";
import AnswerChoice from "./AnswerChoice";
import Word from "./Word";


function Question(props) {
   
    const indexesArray = [0,1,2,3];
const mixedIndexesArray = indexesArray.sort((a, b) => 0.5 - Math.random());
console.log(mixedIndexesArray);

    const words = props.question.text.split(" ");
    console.log(words);

    const playSentence = () => {
        new Audio(props.question.audio).play()
    }

  return (
    <>
    <Card className="mb-3">
        <Card.Header as="h3">Question {props.numero}</Card.Header>
        <Card.Body>

      <Row className="mt-1 mb-3">
      <Col xs={1} className="align-self-end">
                        <Button onClick={playSentence} variant="warning">
                          <GrDocumentSound />
                        </Button>
                      </Col>
        <Col as="h5">{words.map(w => <Word key={v4()} mot={w}/>)}</Col>
      </Row>
      <AnswerChoice numero="1" answerChoice={props.question.answerChoices[mixedIndexesArray[0]]}/>
      <AnswerChoice numero="2" answerChoice={props.question.answerChoices[mixedIndexesArray[1]]}/>
      <AnswerChoice numero="3" answerChoice={props.question.answerChoices[mixedIndexesArray[2]]}/>
      <AnswerChoice numero="4" answerChoice={props.question.answerChoices[mixedIndexesArray[3]]}/>
        </Card.Body>

    </Card>


   
      

      

      
    </>
  );
}

export default Question;
