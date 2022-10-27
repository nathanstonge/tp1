import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BiArrowBack } from "react-icons/bi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { unuseText } from "/src/redux.jsx";
import { useDispatch, useSelector } from "react-redux";
import Titre from "../Components/Titre";
import NotFoundUser from "/src/Views/NotFoundUser.jsx";
import Phrase from "../Components/Phrase";
import { v4 } from "uuid";
import Question from "../Components/Question";
import { addTextCompleted, connectUser } from "/src/redux.jsx";

function Text(props) {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const connectedUser = useSelector((state) => state.sessionUser);
  const users = useSelector((state) => state.users);
  let allowWindowDisplay = true;
  let text;

  if (connectedUser.typeCompte == undefined) {
    allowWindowDisplay = false;
  } else {
    text = connectedUser.textInUse;
  }

  var selectedChoices = [];
  text.questions.forEach((question) => {
    selectedChoices.push({ question: question, userAnswerId: 0 });
  });

  var mixedIndexedArray = [];

  for (let i = 0; i < text.questions.length; i++) {
    mixedIndexedArray.push(i);
  }
  mixedIndexedArray = mixedIndexedArray.sort((a, b) => 0.5 - Math.random());

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
    const index = selectedChoices.findIndex(
      (a) => a.question.id == question.id
    );
    selectedChoicesCopy[index].userAnswerId = answerChoice.id;
    selectedChoices = selectedChoicesCopy;
  };

  const handleSubmit = (event) => {
    const bonnesReponses = [];
    selectedChoices.forEach((selectedChoice) => {
      let bonneReponseNumber = selectedChoice.question.answer;
      let userAnswer = selectedChoice.userAnswerId;

      if (bonneReponseNumber == userAnswer) {
        let goodAnswerText =
          selectedChoice.question.answerChoices[
            parseInt(bonneReponseNumber) - 1
          ].text;
        bonnesReponses.push(goodAnswerText);
      }
    });

    var currentDate = new Date();
    var jour = String(currentDate.getDate());
    var mois = String(currentDate.getMonth() + 1); //January is 0!
    var annee = currentDate.getFullYear();

    currentDate = jour + "/" + mois + "/" + annee;

    dispatch(
      addTextCompleted({
        text: text,
        date: currentDate,
        connectedUser: users.find((u) => u.id == connectedUser.id),
        bonnesReponses: bonnesReponses,
      })
    );
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
                {text.phrases.map((p) => (
                  <Phrase key={v4()} phrase={p} />
                ))}
                {mixedIndexedArray.map((i) => (
                  <Question
                    key={v4()}
                    question={text.questions[i]}
                    handleChangeAnswerChoice={handleChangeAnswerChoice}
                  />
                ))}
                {connectedUser.typeCompte == "Client" ? (
                  <Row className="text-end mt-4">
                    <Col>
                      <Button onClick={handleSubmit} variant="primary">
                        Soumettre
                      </Button>
                    </Col>
                  </Row>
                ) : (
                  <></>
                )}
              </Col>
            </Row>
          </Container>
          {connectedUser.typeCompte == "Client" ? (
            <Button
              variant="info"
              style={{ bottom: "50px", right: "50px", position: "fixed" }}
            >
              <FaRegQuestionCircle size="22" style={{ color: "white" }} />{" "}
            </Button>
          ) : (
            <></>
          )}
        </>
      )}{" "}
    </div>
  );
}

export default Text;
