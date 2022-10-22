import React, { useState } from "react";
import { Container, Card, Button, Row, Col, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { VscClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "/src/redux.jsx";

function CreateAccount(props) {
  let _nom, _prenom, _dateNaissance, _nomUtilisateur, _motPasse, _codeAcces;
  const [accountType, setAccountType] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  let navigateTo = useNavigate();

  const handleSubmit = (event) => {
    const newUser = {
      nom: _nom.value,
      prenom: _prenom.value,
      dateNaissance: _dateNaissance.value,
      nomUtilisateur: _nomUtilisateur.value,
      motPasse: _motPasse.value,
      typeCompte: accountType,
      codeAccesAdmin: _codeAcces.value,
    };
    const adminCodeV = 2525;
    let adminVerified;
    if (newUser.typeCompte === "Admin") {
        adminVerified = false;
        if (newUser.codeAccesAdmin === "") {
          alert("Entrez un code d'accès.");
        } else if (newUser.codeAccesAdmin != adminCodeV) {
          alert("Code administrateur invalide.");
        } else if (newUser.codeAccesAdmin == adminCodeV) {
          adminVerified = true;
        }
      }

    let sameUser = false;
    const existingUser = users.filter(
        (u) => (u.nomUtilisateur === newUser.nomUtilisateur)
      );
      if (existingUser.length != 0) {
        sameUser=true;
        alert("Nom d'utilsateur indisponible.");

      }
          
      if(!sameUser && adminVerified) {
        dispatch(addUser(newUser));
        navigateTo("/");
      }
      
    event.preventDefault();
  };

  return (
    <div>
      <Container style={{ marginTop: "150px" }}>
        <Row className="justify-content-center">
          <Col xs={6}>
            <Card className="">
              <Card.Header className="text-end">
                <Button as={Link} to="/" variant="light">
                  <VscClose size={28} />
                </Button>
              </Card.Header>
              <Card.Body className="p-4">
                <Row className="mb-3">
                  <h3>Création de compte</h3>
                </Row>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col>
                      <Form.Label>Nom :</Form.Label>
                      <Form.Control
                        required
                        ref={(input) => (_nom = input)}
                        className="mb-2"
                        type="text"
                      />
                    </Col>
                    <Col>
                      <Form.Label>Prénom :</Form.Label>
                      <Form.Control
                        required
                        ref={(input) => (_prenom = input)}
                        className="mb-2"
                        type="text"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Form.Label>Date de naissance :</Form.Label>
                      <Form.Control
                        ref={(input) => (_dateNaissance = input)}
                        className="mb-2"
                        type="date"
                        required
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>Nom d'utilisateur :</Form.Label>
                      <Form.Control
                        required
                        ref={(input) => (_nomUtilisateur = input)}
                        className="mb-2"
                        type="text"
                      />
                    </Col>
                    <Col>
                      <Form.Label>Mot de passe :</Form.Label>
                      <Form.Control
                        required
                        ref={(input) => (_motPasse = input)}
                        className="mb-2"
                        type="password"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>Type de compte :</Form.Label>
                      <Form.Check
                        required
                        onChange={() => setAccountType("Client")}
                        type="radio"
                        label="Client"
                        value={accountType}
                        name="typeCompte"
                      />
                      <Form.Check
                        required
                        onChange={() => setAccountType("Admin")}
                        type="radio"
                        label="Admin"
                        value={accountType}
                        name="typeCompte"
                      />
                      <Form.Control
                        className="mb-4"
                        type="text"
                        placeholder="Entrer le code d'accès"
                        ref={(input) => (_codeAcces = input)}
                        style={
                          accountType === "Admin"
                            ? { display: "block" }
                            : { display: "none" }
                        }
                      />
                    </Col>
                  </Row>

                  <Row className="text-center">
                    <Col>
                      <Button
                        style={{ width: "250px" }}
                        variant="success"
                        type="submit"
                      >
                        Créer
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CreateAccount;
