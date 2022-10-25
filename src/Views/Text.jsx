import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Card } from "react-bootstrap";
import { BiArrowBack, BiChevronDownCircle } from "react-icons/bi";
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
import { addTextCompleted, connectUser, disconnectUser } from "/src/redux.jsx";

function Text(props) {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const connectedUser = useSelector((state) => state.sessionUser);
  const users = useSelector((state) => state.users);
  let allowWindowDisplay = true;
  let text;
  const indexesArray = [0, 1, 2, 3, 4, 5];
  const mixedIndexesArray = indexesArray.sort((a, b) => 0.5 - Math.random());
  let selectedChoices = [
    { questionId: 1, answerId: 0 },
    { questionId: 2, answerId: 0 },
    { questionId: 3, answerId: 0 },
    { questionId: 4, answerId: 0 },
    { questionId: 5, answerId: 0 },
    { questionId: 6, answerId: 0 },
  ];
  console.log(selectedChoices);

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

  const handleChangeAnswerChoice = (answerChoice, question) => {
    const selectedChoicesCopy = selectedChoices;
    const index = selectedChoices.findIndex((a) => a.questionId == question.id);
    selectedChoicesCopy[index].answerId = answerChoice.id;
    selectedChoices = selectedChoicesCopy;
  };

  const handleSubmit = (event) => {
    // [{text: {}, bonnesReponses:[], date:""}]
    // on envoie sessionUser(textInUse), bonnesReponses(["", ""])
    console.log(selectedChoices);
    const bonnesReponses = [];
    text.questions.forEach((question) => {
      let bonneReponseId = parseInt(question.answer);
      console.log(typeof bonneReponseId);
      let reponseEntree = selectedChoices.find(
        (c) => (c.questionId === question.id)
      ).answerId;
      console.log(typeof reponseEntree);
      if (bonneReponseId === reponseEntree) {
        console.log("hello");
        let textAnswer = question.answerChoices.find(
          (a) => a.id == bonneReponseId
        ).text;
        bonnesReponses.push(textAnswer);
      }
    });
    var currentDate = new Date();
    var jour = String(currentDate.getDate());
    var mois = String(currentDate.getMonth() + 1); //January is 0!
    var annee = currentDate.getFullYear();

    currentDate = jour + "/" + mois + "/" + annee;

    dispatch(addTextCompleted({text: text, date: currentDate, connectedUser: users.find(u => u.id == connectedUser.id), bonnesReponses: bonnesReponses}));
    navigateTo("/main-client");
    event.preventDefault();
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

                <Form onSubmit={handleSubmit}>
                  <Question
                    handleChangeAnswerChoice={handleChangeAnswerChoice}
                    numero="1"
                    question={text.questions[mixedIndexesArray[0]]}
                  />
                  <Question
                    handleChangeAnswerChoice={handleChangeAnswerChoice}
                    numero="2"
                    question={text.questions[mixedIndexesArray[1]]}
                  />
                  <Question
                    handleChangeAnswerChoice={handleChangeAnswerChoice}
                    numero="3"
                    question={text.questions[mixedIndexesArray[2]]}
                  />
                  <Question
                    handleChangeAnswerChoice={handleChangeAnswerChoice}
                    numero="4"
                    question={text.questions[mixedIndexesArray[3]]}
                  />
                  <Question
                    handleChangeAnswerChoice={handleChangeAnswerChoice}
                    numero="5"
                    question={text.questions[mixedIndexesArray[4]]}
                  />
                  <Question
                    handleChangeAnswerChoice={handleChangeAnswerChoice}
                    numero="6"
                    question={text.questions[mixedIndexesArray[5]]}
                  />
                {connectedUser.typeCompte == "Client" ? <Row className="text-end mt-4">
                    <Col>
                      <Button type="submit" variant="primary">
                        Soumettre
                      </Button>
                    </Col>
                  </Row>: <></>}
                  
                </Form>
              </Col>
            </Row>
          </Container>
          {connectedUser.typeCompte == "Client" ? (<Button
            variant="info"
            style={{ bottom: "50px", right: "50px", position: "fixed" }}
          >
            <FaRegQuestionCircle size="22" style={{ color: "white" }} />{" "}
          </Button>) : <></> }
          
        </>
      )}{" "}
    </div>
  );
}

export default Text;
