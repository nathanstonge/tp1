import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { GrLogout } from "react-icons/gr";
import { disconnectUser } from "/src/redux.jsx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Menu(props) {
  const connectedUser = useSelector((state) => state.sessionUser);
  
  const disptach = useDispatch();
  let navigateTo = useNavigate();

  const handleLogOut = () => {
    disptach(disconnectUser());
    navigateTo("/");
  };
  


  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            {" "}
            <b>Bienvenue</b> {connectedUser.prenom} {connectedUser.nom}{" "}
          </Navbar.Brand>
          <Nav className="text-end" variant="pills" >
            <Nav.Item>
              <Nav.Link>Les textes</Nav.Link>
            </Nav.Item>
            {connectedUser.typeCompte == "Admin" ? (
              <Nav.Link>Statistiques</Nav.Link>
            ) : (<></>)}
            <Nav.Item>
              <Nav.Link as={Link} to="/modify-account">
                Modifier profil
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <GrLogout onClick={handleLogOut} />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Menu;
