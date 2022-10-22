import React, { useEffect } from "react";
import {  useSelector } from "react-redux";
import Menu from "../../Components/Menu";
import NotFoundUser from "../NotFoundUser";
import { FaPlus } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function TextsAdmin(props) {
    let btnAddStyle = {
        bottom: "50px",
        right: "50px",
        position: "absolute",
        color: "white",
      };
  const connectedUser = useSelector((state) => state.sessionUser);
  let allowWindowDisplay = true;

  if (connectedUser == undefined || connectedUser.typeCompte !== "Admin") {
    allowWindowDisplay = false;
  }

  return (
    <div> {allowWindowDisplay ==false ? <NotFoundUser/> : 
    <>
    <Menu />
    <Button variant="success" style={btnAddStyle} as={Link} to="/add-text"><FaPlus size={24}/></Button>
    
    </>
    
    
    }
      
    </div>
  );
}

export default TextsAdmin;
