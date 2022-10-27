import React from "react";
import { Accordion } from "react-bootstrap";
import { v4 } from "uuid";
import StatsText from "./StatsText";

function StatsClient(props) {
  return (
    <div>
      <Accordion.Item eventKey={props.client.id}>
        <Accordion.Header>
          {props.client.prenom} {props.client.nom}
        </Accordion.Header>
        <Accordion.Body>
          {props.client.textsCompleted.map((t) => (
            <StatsText textCompleted={t} key={v4()} />
          ))}
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}

export default StatsClient;
