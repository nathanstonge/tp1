import React from "react";
import { Col, Row, Card, Button, Container } from "react-bootstrap";
import { GrDocumentSound } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus, FaPencilAlt, FaTrash } from "react-icons/fa";
import { useText } from "/src/redux.jsx";
import { useDispatch, useSelector } from "react-redux";

function Texts(props) {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const openText = () => {
    const textInUse = props.text;
    dispatch(useText(textInUse));
    navigateTo("/text");
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
                    <Button  onClick={openText} style={{backgroundColor:"transparent", borderColor: "transparent"}}>
                    <Card.Img src={props.text.imageTitre} />

                  </Button>
                  </Col>
                    
                  <Col style={{ textDecoration: "none" }}>
                  <Button  onClick={openText}  style={{backgroundColor:"transparent", borderColor: "transparent"}}>
                    <h3 style={{ color: "black" }}>{props.text.titre}</h3>
                  </Button>
                  </Col>
                  <Col xs={2} className="mt-3">
                    <Button
                      variant="warning"
                      onClick={() => new Audio(props.text.audioTitre).play()}
                    >
                      <GrDocumentSound />
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          {props.connectedUser.typeCompte == "Admin" ? (
            <Col xs={1} >
              <Button className="mt-2" variant="primary">
                <FaPencilAlt />
              </Button>
              <br></br>
              <Button className="mt-2" variant="danger">
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
