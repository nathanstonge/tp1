import React, { useState } from "react";
import { v4 } from "uuid";
import Word from "./Word";
import { Button, Col, Row } from "react-bootstrap";
import { GrDocumentSound } from "react-icons/gr";

function Phrase(props) {
  const words = props.phrase.text.split(" ");
  const [styleWords, setStyleWords] = useState({});

  const playSentence = () => {
    const audio = new Audio(props.phrase.audio);
    audio.play();
    setStyleWords({ backgroundColor: "#ffc107" });
    setTimeout(() => setStyleWords({}), 5000);
  };

  return (
    <Row className="mb-5">
      <Col xs={1} className="align-self-end">
        <Button onClick={playSentence} variant="warning">
          <GrDocumentSound />
        </Button>
      </Col>
      <Col className="pt-4" style={{ fontSize: "20px" }}>
        {words.map((w) => (
          <Word style={styleWords} key={v4()} mot={w} />
        ))}
      </Col>
    </Row>
  );
}

export default Phrase;
