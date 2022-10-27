import React, { useState } from "react";
import { Col, Row, Card, Button, Container } from "react-bootstrap";
import { GrDocumentSound } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { useText, deleteText } from "/src/redux.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setEditMode, modifyText } from "../redux";

function Texts(props) {
  const [styleWords, setStyleWords] = useState({});
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const connectedUser = useSelector((state) => state.sessionUser);

  const openText = () => {
    const textInUse = props.text;
    dispatch(useText(textInUse));
    var selectedChoices = [];
    textInUse.questions.forEach((question) => {
      selectedChoices.push({ question: question, userAnswerId: 0 });
    });

    navigateTo("/text");
  };

  const playSentence = () => {
    const audio = new Audio(props.text.audioTitre);
    audio.play();
    setStyleWords({ backgroundColor: "#ffc107", color: "black" });
    setTimeout(() => setStyleWords({}), 5000);
  };

  const handleEdit = () => {
    const textInUse = props.text;
    dispatch(modifyText(textInUse));
    navigateTo("/modify-text");
    dispatch(setEditMode(connectedUser.editMode));
  };

  return (
    <div>
      <Container style={{ marginTop: "75px" }}>
        <Row className="justify-content-center">
          <Col xs={8}>
            <Card>
              <Card.Body>
                <Row>
                  <Col xs={2} style={{ textDecoration: "none" }}>
                    <Button
                      onClick={openText}
                      style={{
                        backgroundColor: "transparent",
                        borderColor: "transparent",
                      }}
                    >
                      <Card.Img src={props.text.imageTitre} />
                    </Button>
                  </Col>

                  <Col>
                    <Button
                      onClick={openText}
                      style={{
                        backgroundColor: "transparent",
                        borderColor: "transparent",
                      }}
                    >
                      <h3 style={{ ...styleWords, color: "black" }}>
                        {props.text.titre}
                      </h3>
                    </Button>
                  </Col>
                  <Col xs={2} className="mt-3">
                    <Button variant="warning" onClick={playSentence}>
                      <GrDocumentSound />
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          {props.connectedUser.typeCompte == "Admin" ? (
            <Col xs={1}>
              <Button onClick={handleEdit} className="mt-2" variant="primary">
                <FaPencilAlt />
              </Button>
              <br></br>
              <Button
                onClick={() => dispatch(deleteText(props.text))}
                className="mt-2"
                variant="danger"
              >
                <FaTrash />
              </Button>
            </Col>
          ) : (
            <></>
          )}
        </Row>
      </Container>
    </div>
  );
}
export default Texts;
