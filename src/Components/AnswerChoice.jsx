import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { GrDocumentSound } from "react-icons/gr";

function AnswerChoice(props) {
  const [styleWords, setStyleWords] = useState({});
  const playSentence = () => {
    const audio = new Audio(props.answerChoice.audio);
    audio.play();
    setStyleWords({ backgroundColor: "#ffc107", color: "black" });
    setTimeout(() => setStyleWords({}), 5000);
  };

  const handleChange = () => {
    props.handleChangeAnswerChoice(props.answerChoice, props.question);
  };

  return (
    <Row>
      <label>
        <input
          name={props.name}
          onChange={handleChange}
          type="radio"
          className="card-input-element"
        />

        <div className="card card-default card-input">
          <div className="card-body">
            <Row>
              <Col xs={1} className="pt-4">
                <Button onClick={playSentence} variant="warning">
                  <GrDocumentSound />
                </Button>
              </Col>
              <Col xs={2}>
                <img src={props.answerChoice.image} width="90px" />
              </Col>
              <Col className="pt-4">
                <p style={{ ...styleWords, fontSize: "18px" }}>
                  {props.answerChoice.text}
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </label>
    </Row>
  );
}

export default AnswerChoice;
