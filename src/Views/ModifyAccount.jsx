import React, { useState } from "react";
import { Container, Card, Button, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "/src/redux.jsx";
import Menu from "../Components/Menu";
import NotFoundUser from "./NotFoundUser";
import { connectUser } from "../redux";

function modifyAccount(props) {
  const dispatch = useDispatch();
  let navigateTo = useNavigate();
  const connectedUser = useSelector((state) => state.sessionUser);
  const otherUsers = useSelector((state) =>
    state.users.filter((u) => u.id !== connectedUser.id)
  );
  const users = useSelector(state => state.users);
  const [userInfos, setUserInfos] = useState(connectedUser);
  let allowWindowDisplay = true;

  if (connectedUser == undefined) {
    allowWindowDisplay = false;
  }
  const handleModify = (event) => {
    let sameUser = false;
    const existingUsers = otherUsers.filter(
      (u) => u.nomUtilisateur === userInfos.nomUtilisateur
    );
    if (existingUsers.length != 0) {
      sameUser = true;
      alert("Nom d'utilisateur indisponible.");
    }
    if (sameUser == false) {
      dispatch(editUser(userInfos));
      dispatch(connectUser(userInfos));
      if(connectedUser.typeCompte == "Admin") {
          navigateTo("/main-admin");

      } else if (connectedUser.typeCompte == "Client") {
       
        navigateTo("/main-client");
      }
    
    }
    event.preventDefault();
  };
//   const handleConnexionClient = () => {
//     const clientUsers = users.filter((u) => u.typeCompte == "Client");
//     const clientUser = clientUsers.find(u => u.id == connectedUser.id);
//    dispatch(connectUser(clientUser));
        
//   };
//   const handleConnexionAdmin = () => {
//     const adminUsers = otherUsers.filter((u) => u.typeCompte == "Admin");
//     let foundUser = false;
//     const adminUser = adminUsers.find(u => u.nomUtilisateur == _usernameInput.value);
//     if (adminUser.motPasse == _passwordInput.value) {
//         foundUser = true;
//         navigateTo("/main-admin");
//           dispatch(connectUser(adminUser));
//       }
//     if(!foundUser){
//      alert("Le nom d'utilisateur ou le mot de passe est invalide.");
//      _usernameInput.value = "";
//      _passwordInput.value = "";
//     }
        
    
      
//   };
  function handleChange(event) {
    const { name, value } = event.target;

    setUserInfos((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div>
      {allowWindowDisplay == false ? (
        <NotFoundUser />
      ) : (
        <>
          <Menu />
          <Container style={{ marginTop: "75px" }}>
            <Row className="justify-content-center">
              <Col xs={6}>
                <Card className="">
                  <Card.Body className="p-4">
                    <Row className="mb-3">
                      <h3>Modification du compte</h3>
                    </Row>
                    <Form onSubmit={handleModify}>
                      <Row>
                        <Col>
                          <Form.Label>Nom :</Form.Label>
                          <Form.Control
                            value={userInfos.nom}
                            onChange={handleChange}
                            required
                            name="nom"
                            className="mb-2"
                            type="text"
                          />
                        </Col>
                        <Col>
                          <Form.Label>Prénom :</Form.Label>
                          <Form.Control
                            name="prenom"
                            onChange={handleChange}
                            required
                            value={userInfos.prenom}
                            className="mb-2"
                            type="text"
                          />
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <Form.Label>Date de naissance :</Form.Label>
                          <Form.Control
                            name="dateNaissance"
                            onChange={handleChange}
                            value={userInfos.dateNaissance}
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
                            name="nomUtilisateur"
                            required
                            onChange={handleChange}
                            value={userInfos.nomUtilisateur}
                            className="mb-2"
                            type="text"
                          />
                        </Col>
                        <Col>
                          <Form.Label>Mot de passe :</Form.Label>
                          <Form.Control
                            name="motPasse"
                            required
                            onChange={handleChange}
                            value={userInfos.motPasse}
                            className="mb-2"
                            type="password"
                          />
                        </Col>
                      </Row>

                      <Row className="text-center">
                        <Col>
                          <Button
                            style={{ width: "250px" }}
                            variant="primary"
                            type="submit"
                          >
                            Modifier
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </div>
  );
}

export default modifyAccount;
