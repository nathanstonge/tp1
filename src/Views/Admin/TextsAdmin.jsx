import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Menu from "../../Components/Menu";
import NotFoundUser from "../NotFoundUser";
import { FaPlus, FaPencilAlt, FaTrash } from "react-icons/fa";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Texts from "../../Components/Texts";
import { v4 } from "uuid";
import { addText, createText, changeAttribute, useText } from "/src/redux.jsx";

function TextsAdmin(props) {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const handleAddText = () => {
    let id = v4();
    console.log(id);
    dispatch(createText(id));
    navigateTo("/add-text");
    
}
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
            onClick={handleAddText}
          >
            <FaPlus size={24} />
          </Button>
        </>
      )}
    </div>
  );
}

export default TextsAdmin;
