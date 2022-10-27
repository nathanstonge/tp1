import React, { useState } from "react";
import { Button, Col, Row, Card } from "react-bootstrap";
import { GrDocumentSound } from "react-icons/gr";
import { v4 } from "uuid";
import AnswerChoice from "./AnswerChoice";
import Word from "./Word";

function Question(props) {
  const [styleWords, setStyleWords] = useState({});
  const playSentence = () => {
    const audio = new Audio(props.question.audio);
    audio.play();
    setStyleWords({ backgroundColor: "#ffc107", color: "black" });
    setTimeout(() => setStyleWords({}), 5000);
  };
  var mixedIndexedArray = [];
  for (let i = 0; i < props.question.answerChoices.length; i++) {
    mixedIndexedArray.push(i);
  }
  mixedIndexedArray = mixedIndexedArray.sort((a, b) => 0.5 - Math.random());

  const words = props.question.text.split(" ");

  return (
    <>
      <Card className="mb-3">
        <Card.Header as="h3">Question</Card.Header>
        <Card.Body>
          <Row className="mt-1 mb-3">
            <Col xs={1} className="align-self-end">
              <Button onClick={playSentence} variant="warning">
                <GrDocumentSound />
              </Button>
            </Col>
            <Col as="h5">
              {words.map((w) => (
                <Word style={styleWords} key={v4()} mot={w} />
              ))}
            </Col>
          </Row>
          {mixedIndexedArray.map((i) => (
            <AnswerChoice
              key={v4()}
              handleChangeAnswerChoice={props.handleChangeAnswerChoice}
              answerChoice={props.question.answerChoices[i]}
              question={props.question}
              name={props.question.id}
            />
          ))}
        </Card.Body>
      </Card>
    </>
  );
}

export default Question;
