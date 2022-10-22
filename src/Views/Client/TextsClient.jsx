import React, { useEffect } from "react";
import {  useSelector } from "react-redux";
import Menu from "../../Components/Menu";
import NotFoundUser from "../NotFoundUser";

function TextsClient(props) {
    const connectedUser = useSelector((state) => state.sessionUser);
    console.log(connectedUser);
  let allowWindowDisplay = true;

  if (connectedUser == undefined || connectedUser.typeCompte !== "Client") {
    allowWindowDisplay = false;
  }

  return (
    <div> {allowWindowDisplay ==false ? <NotFoundUser/> : <Menu /> }
      
    </div>
  );
}

export default TextsClient;