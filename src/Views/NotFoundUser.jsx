import React from "react";
import { FaHome, FaTimesCircle } from "react-icons/fa";
import { Container, Card, Button, Row, Col, Form } from "react-bootstrap";

import { Link } from "react-router-dom";

function NotFoundUser(props) {
  return (
    <div>
      <Container style={{ marginTop: "50px" }}>
        <Row className="justify-content-center">
          <Col xs={8} className="text-center">
          
            <Card style={{ margin: "100px" }}>
              <Card.Body>
              <FaTimesCircle size={56} className="mb-3"/>
                <h1>
                
                  <b> Utilisateur invalide</b>
                </h1>
                <p>Page inacessible</p>
                <Button variant="success" to="/" as={Link}>
                  Connexion
                </Button>
              </Card.Body>
            </Card>
            
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default NotFoundUser;
