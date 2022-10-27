import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import { v4 } from "uuid";
import GoodAnswer from "./GoodAnswer";

function StatsText(props) {
  return (
    <div>
      <Card className="mb-3">
        <Card.Body>
          <Row>
            <Col xs={6}> {props.textCompleted.text.titre}</Col>
            <Col xs={2}> {props.textCompleted.bonnesReponses.length}/6</Col>
            <Col xs={4} className="text-end">
              Date : {props.textCompleted.date}
            </Col>
          </Row>
          <hr></hr>
          {props.textCompleted.bonnesReponses.length == 0 ? (
            <Row>
              <Col>Aucune bonne réponse</Col>
            </Row>
          ) : (
            <>
              {" "}
              {props.textCompleted.bonnesReponses.map((b) => (
                <GoodAnswer key={v4()} bonneReponse={b} />
              ))}
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default StatsText;
