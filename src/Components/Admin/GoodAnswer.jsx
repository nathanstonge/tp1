import React from "react";
import { Col, Row } from "react-bootstrap";

function GoodAnswer(props) {
  return (
    <div>
      <Row>
        <Col>{props.bonneReponse}</Col>
      </Row>
    </div>
  );
}

export default GoodAnswer;
