import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Menu from "../../Components/Menu";
import Texts from "../../Components/Texts";
import NotFoundUser from "../NotFoundUser";
import { Button, Container, Row, Col } from "react-bootstrap";
import { v4 } from "uuid";

function TextsClient(props) {
  const texts = useSelector((state) => state.texts);
  const connectedUser = useSelector((state) => state.sessionUser);
  let allowWindowDisplay = true;

  if (connectedUser == undefined || connectedUser.typeCompte !== "Client") {
    allowWindowDisplay = false;
  }
  const GridStyle = {
    display: "grid",
    gap: "10px",
  };

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
        </>
      )}
    </div>
  );
}

export default TextsClient;
