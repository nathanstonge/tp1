import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Card } from "react-bootstrap";
import { BiArrowBack } from "react-icons/bi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { GrDocumentSound } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { unuseText } from "/src/redux.jsx";
import { useDispatch, useSelector } from "react-redux";
import Titre from "../Components/Titre";
import NotFoundUser from "/src/Views/NotFoundUser.jsx";
import Phrase from "../Components/Phrase";
import { v4 } from "uuid";

function AnswerChoice(props) {
  
  const [styleWords, setStyleWords] = useState({});
  const playSentence = () => {
      const audio = new Audio(props.answerChoice.audio);
       audio.play();
        setStyleWords({backgroundColor:"#ffc107", color: "black"});
        setTimeout(() => setStyleWords({}), 5000);
  
    }

  const handleChange = () => {
    props.handleChangeAnswerChoice(props.answerChoice, props.question);
    
  }




  return (
    <Row>
      <label>
        <input onChange={handleChange} type="radio" name={props.name} className="card-input-element" />

        <div className="card card-default card-input">
          <div className="card-body">
            <Row>
              <Col xs={1} className="pt-4">
                <Button onClick={playSentence} variant="warning">
                  <GrDocumentSound />
                </Button>
              </Col>
              <Col xs={2}>
                <img src={props.answerChoice.image} width="90px" />
              </Col>
              <Col className="pt-4">
                <p style={{...styleWords, fontSize: "18px" }}>{props.answerChoice.text}</p>
              </Col>
            </Row>
          </div>
        </div>
      </label>
    </Row>

    //         <Card className="mb-3">
    //     <Card.Body>
    //       <Row>
    //         <Col xs={1} className="pt-4">
    //           <Button onClick={playSentence} variant="warning">
    //             <GrDocumentSound />
    //           </Button>
    //         </Col>
    //         <Col xs={2}>
    //           <img src={props.answerChoice.image} width="90px" />
    //         </Col>
    //         <Col className="pt-4">
    //           <p style={{ fontSize: "18px" }}>
    //            {props.answerChoice.text}
    //           </p>
    //         </Col>
    //       </Row>
    //     </Card.Body>
    //   </Card>
  );
}

export default AnswerChoice;
