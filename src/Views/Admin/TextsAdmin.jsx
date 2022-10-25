import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Menu from "../../Components/Menu";
import NotFoundUser from "../NotFoundUser";
import { FaPlus, FaPencilAlt, FaTrash } from "react-icons/fa";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Texts from "../../Components/Texts";
import { v4 } from "uuid";

function TextsAdmin(props) {
  const texts = useSelector((state) => state.texts);
  let btnAddStyle = {
    bottom: "50px",
    right: "50px",
    position: "fixed",
    color: "white",
  };
  
  const connectedUser = useSelector((state) => state.sessionUser);
  let allowWindowDisplay = true;

  if (connectedUser == undefined || connectedUser.typeCompte !== "Admin") {
    allowWindowDisplay = false;
  }

  return (
    <div>
      {" "}
      {allowWindowDisplay == false ? (
        <NotFoundUser />
      ) : (
        <>
          <Menu />
          <Container>
            
                {texts.map(t => <Texts key={v4()} connectedUser={connectedUser} text={t} />)}
                
               
              
          </Container>
          
          <Button
            variant="success"
            style={btnAddStyle}
            as={Link}
            to="/add-text"
          >
            <FaPlus size={24} />
          </Button>
        </>
      )}
    </div>
  );
}

export default TextsAdmin;
