import React from "react";
import { Container, Card, Button, Row, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { connectUser } from "../redux";

function Login(props) {
  let _usernameInput, _passwordInput;
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  let navigateTo = useNavigate();
  let btnSwitchConnStyle = {
    top: "50px",
    right: "50px",
    position: "absolute",
    color: "white",
  };
  let imgSrc;

  if (props.connexionType == "Admin") {
    imgSrc = "src/Images/admin.png";
  } else if (props.connexionType == "Client") {
    imgSrc =
      "src/Images/client.png";
  }
  const handleConnexionClient = () => {
    const clientUsers = users.filter((u) => u.typeCompte == "Client");
    let foundUser = false;
    const clientUser = clientUsers.find(u => u.nomUtilisateur == _usernameInput.value);
  if(clientUser != undefined) {
    if (clientUser.motPasse == _passwordInput.value) {
        foundUser = true;
        navigateTo("/main-client");
          dispatch(connectUser(clientUser));
      }
    }
    
    if(!foundUser){
     alert("Le nom d'utilisateur ou le mot de passe est invalide.");
     _usernameInput.value = "";
     _passwordInput.value = "";
    }
        
  };
  const handleConnexionAdmin = () => {
    const adminUsers = users.filter((u) => u.typeCompte == "Admin");
    let foundUser = false;
    const adminUser = adminUsers.find(u => u.nomUtilisateur == _usernameInput.value);
    if(adminUser != undefined) {
    if (adminUser.motPasse == _passwordInput.value) {
        foundUser = true;
        navigateTo("/main-admin");
          dispatch(connectUser(adminUser));
      } 
    }
    if(!foundUser){
     alert("Le nom d'utilisateur ou le mot de passe est invalide.");
     _usernameInput.value = "";
     _passwordInput.value = "";
    }
        
    
      
  };

  return (
    <div>
      <Container style={{ marginTop: "150px" }}>
        <Row className="justify-content-center">
          <Col xs={4}>
            <Card className="p-5">
              <Row className="justify-content-center">
                <img
                 
                  src={imgSrc}
                  alt="Image de profil"
                  style={{ width: "250px"}}
                />
              </Row>
              <Form>
                <Row>
                  <Form.Control
                    ref={(input) => (_usernameInput = input)}
                    required
                    className="mb-2"
                    type="text"
                    placeholder="Nom d'utilisateur"
                  />
                </Row>
                <Row>
                  <Form.Control
                    ref={(input) => (_passwordInput = input)}
                    required
                    className="mb-2"
                    type="password"
                    placeholder="Mot de passe"
                  />
                </Row>
                <Row>
                  {props.connexionType == "Admin" ? (
                    <Button
                      type="submit"
                      variant="success"
                      onClick={handleConnexionAdmin}
                    >
                      Connexion
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      variant="success"
                      onClick={handleConnexionClient}
                    >
                      Connexion
                    </Button>
                  )}
                </Row>
                <Row>
                  <Button as={Link} to="/create-account" variant="link">
                    Créer un compte
                  </Button>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
      {props.connexionType == "Client" ? (
        <Button
          style={btnSwitchConnStyle}
          variant="info"
          as={Link}
          to="/admin-login"
        >
          Connexion administrateur
        </Button>
      ) : (
        <Button style={btnSwitchConnStyle} variant="warning" as={Link} to="/">
          Connexion client
        </Button>
      )}
    </div>
  );
}

export default Login;
