import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Image from "../../Components/Admin/Image";
import Sentence from "../../Components/Admin/Sentence";
import Question from "../../Components/Admin/Question";
import { v4 } from "uuid";
import ImageAdded from "../../Components/Admin/ImageAdded";
import SentenceAdded from "../../Components/Admin/SentenceAdded";
import { useDispatch, useSelector } from "react-redux";
import { addText } from "/src/redux.jsx";
import QuestionAdded from "../../Components/Admin/QuestionAdded";
import {
  changeTitle,
  changeAudioTitre,
  changeImageTitre,
  editText,
  setEditMode,
} from "../../redux";

function TextInfos(props) {
  const connectedUser = useSelector((state) => state.sessionUser);
  const dispatch = useDispatch();
  let textInUse;
  const navigateTo = useNavigate();

  if (connectedUser.editMode == false) {
    textInUse = useSelector((state) => state.textInModification);
  } else {
    textInUse = connectedUser.textInUse;
  }
  const textInModification = useSelector((state) => state.textInModification);

  const [text, setText] = useState(textInUse);
  const [images, setImages] = useState(text.images);
  const [sentences, setSentences] = useState(text.phrases);
  const [questions, setQuestions] = useState(text.questions);

  const handleAddImage = (imageScr) => {
    const newImage = { id: v4(), src: imageScr };
    setImages((prevValue) => {
      return [...prevValue, newImage];
    });
  };
  const handleRemoveImage = (id) => {
    setImages((prevValues) => {
      return prevValues.filter((i) => {
        return i.id != id;
      });
    });
  };

  const handleAddSentence = (sentence) => {
    const newSentence = {
      id: v4(),
      text: sentence.text,
      audio: sentence.audio,
    };
    setSentences((prevValue) => {
      return [...prevValue, newSentence];
    });
  };
  const handleRemoveSentence = (id) => {
    setSentences((prevValues) => {
      return prevValues.filter((s) => {
        return s.id != id;
      });
    });
  };

  const handleAddQuestion = (question) => {
    const newQuestion = {
      id: v4(),
      text: question.text,
      audio: question.audio,
      answer: "1",
      answerChoices: [],
    };
    setQuestions((prevValue) => {
      return [...prevValue, newQuestion];
    });
    console.log(questions);
  };
  const handleRemoveQuestion = (id) => {
    setQuestions((prevValues) => {
      return prevValues.filter((q) => {
        return q.id != id;
      });
    });
  };

  //Test asnwerchoices
  const [answerChoices, setAnswerChoices] = useState([]);
  const handleAddAnswerChoice = (answerChoice) => {
    setAnswerChoices((prevValue) => {
      return [...prevValue, answerChoice];
    });
  };

  const handleRemoveAnswerChoice = (id) => {
    setAnswerChoices((prevValues) => {
      return prevValues.filter((a) => {
        return a.id != id;
      });
    });
  };

  const handleValidate = () => {
    dispatch(addText(textInModification));
    navigateTo("/main-admin");
  };

  const [titre, setTitre] = useState(textInModification.titre);

  const handleChangeTitre = (event) => {
    setTitre(event.target.value);
  };

  const [audioTitre, setAudioTitre] = useState(textInModification.audioTitre);

  const handleChangeAudioTitre = (event) => {
    setAudioTitre(event.target.value);
  };

  const [imageTitre, setImageTitre] = useState(textInModification.imageTitre);

  const handleChangeImageTitre = (event) => {
    setImageTitre(event.target.value);
  };
  const handleAddTitre = () => {
    dispatch(changeTitle(titre));
    dispatch(changeImageTitre(imageTitre));
    dispatch(changeAudioTitre(audioTitre));
  };

  const handleModify = () => {
    dispatch(editText(textInModification));
    dispatch(setEditMode(connectedUser));
    navigateTo("/main-admin");
  };

  const handleRetour = () => {
    if (connectedUser.editMode == true) {
      dispatch(setEditMode(connectedUser));
    }
    navigateTo("/main-admin");
  };

  return (
    <div>
      <Button
        onClick={handleRetour}
        style={{ left: "50px", top: "50px", position: "absolute" }}
      >
        <BiArrowBack /> Retour
      </Button>
      <Container style={{ marginTop: "150px" }}>
        <Form>
          <Row className="justify-content-center">
            <Col xs={8}>
              <Row>
                <Col>
                  <Form.Label as="h1">Titre :</Form.Label>
                </Col>
                <Col xs={10} className="pt-2">
                  <Form.Control
                    value={titre}
                    name="titre"
                    onChange={handleChangeTitre}
                    placeholder="Entrez le titre"
                    required
                    className="mb-2"
                    type="text"
                  />
                  <Row>
                    <Col xs={3} className="pt-2">
                      <Form.Label as="h6">Audio :</Form.Label>
                    </Col>
                    <Col>
                      <Form.Control
                        placeholder="Entrez la source du fichier audio"
                        name="audioTitre"
                        value={audioTitre}
                        onChange={handleChangeAudioTitre}
                        className="mb-3"
                        type="text"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={3} className="pt-2">
                      <Form.Label as="h6">Source image :</Form.Label>
                    </Col>
                    <Col>
                      <Form.Control
                        name="imageTitre"
                        placeholder="Entrez la source de l'image"
                        value={imageTitre}
                        onChange={handleChangeImageTitre}
                        className="mb-3"
                        type="text"
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col className="text-center">
                  <Button
                    onClick={handleAddTitre}
                    variant="success"
                    className="mb-1"
                  >
                    <FaCheck size={16} /> Confirmer le titre
                  </Button>
                </Col>
              </Row>
              <Card className="mt-4">
                <Card.Header as="h2"> Images </Card.Header>
                <Card.Body className="p-4">
                  <Image addImage={handleAddImage} />

                  <Row className="mt-3">
                    <Col>
                      {textInModification.images.map((i) => (
                        <ImageAdded
                          key={i.id}
                          removeImage={handleRemoveImage}
                          image={i}
                        />
                      ))}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card className="mt-4">
                <Card.Header as="h2"> Phrases </Card.Header>
                <Card.Body className="p-4">
                  <Sentence addSentence={handleAddSentence} />
                  <hr />
                  {textInModification.phrases.map((s) => (
                    <SentenceAdded
                      key={s.id}
                      sentence={s}
                      sentences={sentences}
                      setSentences={setSentences}
                      removeSentence={handleRemoveSentence}
                    />
                  ))}
                </Card.Body>
              </Card>
              <Card className="mt-4">
                <Card.Header as="h2"> Questions </Card.Header>
                <Card.Body className="p-4">
                  <Question handleAddQuestion={handleAddQuestion} />
                  <hr />

                  {textInModification.questions.map((q) => (
                    <QuestionAdded
                      handleAddAnswerChoice={handleAddAnswerChoice}
                      handleRemoveAnswerChoice={handleRemoveAnswerChoice}
                      key={q.id}
                      question={q}
                      questions={questions}
                      setQuestions={setQuestions}
                      handleRemoveQuestion={handleRemoveQuestion}
                      answerChoices={answerChoices}
                      setAnswerChoice={setAnswerChoices}
                    />
                  ))}
                </Card.Body>
              </Card>
              <Row className="text-end mb-5 mt-4">
                {connectedUser.editMode == false ? (
                  <Col>
                    <Button onClick={handleValidate} variant="primary">
                      Créer
                    </Button>
                  </Col>
                ) : (
                  <Col>
                    <Button onClick={handleModify} variant="primary">
                      Modifier
                    </Button>
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default TextInfos;
