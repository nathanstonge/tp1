import React from "react";
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
import Question from "../Components/Question";

function Text(props) {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const connectedUser = useSelector((state) => state.sessionUser);
  let allowWindowDisplay = true;
  let text;
  const indexesArray = [0,1,2,3,4,5];
const mixedIndexesArray = indexesArray.sort((a, b) => 0.5 - Math.random());



  if (connectedUser.typeCompte == undefined) {
    allowWindowDisplay = false;
  } else {
    text = connectedUser.textInUse;
  }

  const closeText = () => {
    const textInUse = props.text;
    dispatch(unuseText(textInUse));

    if (connectedUser.typeCompte == "Admin") {
      navigateTo("/main-admin");
    } else {
      navigateTo("/main-client");
    }
  };
  

  return (
    <div>
      {allowWindowDisplay == false ? (
        <NotFoundUser />
      ) : (
        <>
          <Button
            onClick={closeText}
            variant="primary"
            style={{ left: "50px", top: "50px", position: "absolute" }}
          >
            <BiArrowBack /> Retour
          </Button>
          <Container style={{ marginTop: "125px" }}>
            <Row className="justify-content-center">
              <Col xs={11}>
                <Row className="mb-4">
                  <Col className="text-center" as="h1">
                    <Titre titre={text.titre} />
                  </Col>
                </Row>
                {/* <Row className="mb-5">
                      <Col xs={1} className="pt-4">
                        <Button variant="warning">
                          <GrDocumentSound />
                        </Button>
                      </Col>
                      <Col className="pt-4">
                        <p style={{ fontSize: "18px" }}>
                          Ici sera mis une phrase du texte.
                        </p>
                      </Col>
                    </Row> */}
                {text.phrases.map((p) => (
                  <Phrase key={v4()} phrase={p} />
                ))}

                <Form>
                  
                      <Question numero="1" question={text.questions[mixedIndexesArray[0]]} />
                      <Question numero="2" question={text.questions[mixedIndexesArray[1]]}/>
                      <Question numero="3" question={text.questions[mixedIndexesArray[2]]}/>
                      <Question numero="4" question={text.questions[mixedIndexesArray[3]]}/>
                      <Question numero="5" question={text.questions[mixedIndexesArray[4]]}/>
                      <Question numero="6" question={text.questions[mixedIndexesArray[5]]}/>

                      <Row className="text-end mt-4">
                        <Col>
                          <Button variant="primary">Soumettre</Button>
                        </Col>
                      </Row>
                    
                </Form>
              </Col>
            </Row>
          </Container>
          <Button
            variant="info"
            style={{ bottom: "50px", right: "50px", position: "fixed" }}
          >
            <FaRegQuestionCircle size="22" style={{ color: "white" }} />{" "}
          </Button>
        </>
      )}{" "}
    </div>
  );
}

export default Text;
