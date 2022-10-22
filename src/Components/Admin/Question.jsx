import React from 'react';
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

function Question(props) {
    return (
        <div>
             <Card className="mt-5">
                <Card.Header as="h2">
                  {" "}
                  Question{" "}
                  
                </Card.Header>
                <Card.Body className="p-4">
                  <Form.Label as="h6">Texte :</Form.Label>
                  <Form.Control
                    placeholder="Entrez la question"
                    required
                    className="mb-3"
                    type="text"
                  />
                  <Form.Label as="h6">Audio :</Form.Label>
                  <Form.Control className="mb-3" type="file" />
                  <Row>
                    <Col>
                      <Form.Label as="h6">Réponse :</Form.Label>
                    </Col>
                    <Col>
                      <Form.Check
                        required
                        type="radio"
                        label="Choix 1"
                        name="reponse"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        required
                        type="radio"
                        label="Choix 2"
                        name="reponse"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        required
                        type="radio"
                        label="Choix 3"
                        name="reponse"
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        required
                        type="radio"
                        label="Choix 4"
                        name="reponse"
                      />
                    </Col>
                  </Row>
                  {/* Choix de reponse 1 */}
                  <Card className="mt-3">
                    <Card.Header as="h6">
                        Choix de réponse 1
                    </Card.Header>
                    <Card.Body>
                    <Form.Label as="h6">Texte :</Form.Label>
                  <Form.Control
                    placeholder="Entrez la phrase"
                    required
                    className="mb-3"
                    type="text"
                  />
                  <Form.Label as="h6">Audio :</Form.Label>
                  <Form.Control className="mb-2" type="file" />
                    </Card.Body>
                  </Card>
                  <Card className="mt-3">
                    <Card.Header as="h6">
                        Choix de réponse 2
                    </Card.Header>
                    <Card.Body>
                    <Form.Label as="h6">Texte :</Form.Label>
                  <Form.Control
                    placeholder="Entrez la phrase"
                    required
                    className="mb-3"
                    type="text"
                  />
                  <Form.Label as="h6">Audio :</Form.Label>
                  <Form.Control className="mb-2" type="file" />
                    </Card.Body>
                  </Card>
                  <Card className="mt-3">
                    <Card.Header as="h6">
                        Choix de réponse 3
                    </Card.Header>
                    <Card.Body>
                    <Form.Label as="h6">Texte :</Form.Label>
                  <Form.Control
                    placeholder="Entrez la phrase"
                    required
                    className="mb-3"
                    type="text"
                  />
                  <Form.Label as="h6">Audio :</Form.Label>
                  <Form.Control className="mb-2" type="file" />
                    </Card.Body>
                  </Card>
                  <Card className="mt-3">
                    <Card.Header as="h6">
                        Choix de réponse 4
                    </Card.Header>
                    <Card.Body>
                    <Form.Label as="h6">Texte :</Form.Label>
                  <Form.Control
                    placeholder="Entrez la phrase"
                    required
                    className="mb-3"
                    type="text"
                  />
                  <Form.Label as="h6">Audio :</Form.Label>
                  <Form.Control className="mb-2" type="file" />
                    </Card.Body>
                  </Card>
                </Card.Body>
              </Card>
        </div>
    );
}

export default Question;