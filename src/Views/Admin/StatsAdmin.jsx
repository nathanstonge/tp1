import React from "react";
import { Accordion, Col, Row, Container } from "react-bootstrap";
import Menu from "../../Components/Menu";
import { FaUsers } from "react-icons/fa";
import { useSelector } from "react-redux";
import StatsClient from "../../Components/Admin/StatsClient";
import { v4 } from "uuid";

function statsAdmin(props) {
  const clientUsers = useSelector((state) =>
    state.users.filter((u) => u.typeCompte == "Client")
  );

  return (
    <div>
      <Menu />
      <Container style={{ marginTop: "75px" }}>
        <Row className="justify-content-center">
          <Col xs={8}>
            <h4>
              Les participants <FaUsers />{" "}
            </h4>
            <Accordion>
              {clientUsers.map((c) => (
                <StatsClient client={c} key={v4()} />
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default statsAdmin;
