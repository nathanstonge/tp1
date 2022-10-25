import React from "react";
import { Accordion, Col, Row, Container, Card, Button } from "react-bootstrap";
import Menu from "../../Components/Menu";
import { FaUsers} from "react-icons/fa";

function statsAdmin(props) {
  

    return (
        <div>
            <Menu/>
            <Container style={{ marginTop: "75px" }}>
        <Row className="justify-content-center">
          <Col xs={8}>

            <h4>
              Les participants <FaUsers />{" "}
            </h4>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Nom client</Accordion.Header>
                <Accordion.Body>
                  <h6>Titre du texte</h6>
                  <Card className="mb-3">
                    <Card.Body>
                      <Row>
                        <Col> Tentatives #</Col>
                        <Col> X/6</Col>
                        <Col className="text-end">Date : </Col>
                      </Row>
                      <hr></hr>
                      <Row>
                        <Col>Insérer les bonnes réponses ici</Col>
                      </Row>
                    </Card.Body>
                  </Card>
                  <h6>Titre du texte</h6>
                  <Card className="mb-3">
                    <Card.Body>
                      <Row>
                        <Col> Tentatives #</Col>
                        <Col> X/6</Col>
                        <Col className="text-end">Date : </Col>
                      </Row>
                      <hr></hr>
                      <Row>
                        <Col>Insérer les bonnes réponses ici</Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Nom client</Accordion.Header>
                <Accordion.Body>
                  <h6>Titre du texte</h6>
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col> Tentatives #</Col>
                        <Col> X/6</Col>
                        <Col className="text-end">Date : </Col>
                      </Row>
                      <hr></hr>
                      <Row>
                        <Col>Insérer les bonnes réponses ici</Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
        </div>
    );
}

export default statsAdmin;