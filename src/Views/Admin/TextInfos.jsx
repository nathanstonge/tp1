import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import Image from "../../Components/Admin/Image";
import Sentence from "../../Components/Admin/Sentence";
import Question from "../../Components/Admin/Question";
import { v4 } from "uuid";
import ImageAdded from "../../Components/Admin/ImageAdded";
import SentenceAdded from "../../Components/Admin/SentenceAdded";
import { useDispatch } from "react-redux";
import { addText } from "/src/redux.jsx";

function TextInfos(props) {
  const dispatch = useDispatch();
  let _titre;
  const [images, setImages] = useState([]);
  const [sentences, setSentences] = useState([]);
  const [questions, setQuestions] = useState([
    { id: 1, text: "", audio: "", answer: "", answerChoices: [] },
    { id: 2, text: "", audio: "", answer: "", answerChoices: [] },
    { id: 3, text: "", audio: "", answer: "", answerChoices: [] },
    { id: 4, text: "", audio: "", answer: "", answerChoices: [] },
    { id: 5, text: "", audio: "", answer: "", answerChoices: [] },
    { id: 6, text: "", audio: "", answer: "", answerChoices: [] },
  ]);

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

  const replaceQuestions = (id, question) => {
    const questionsCopy = questions;
    const index = questions.findIndex((q) => q.id == id);
    questionsCopy[index] = question;
    return questionsCopy;
  };

  const handleChangeQuestion = (question) => {
    switch (question.id) {
      case "1":
        setQuestions(replaceQuestions(1, question));
        break;
      case "2":
        setQuestions(replaceQuestions(2, question));

        break;
      case "3":
        setQuestions(replaceQuestions(3, question));

        break;
      case "4":
        setQuestions(replaceQuestions(4, question));

        break;
      case "5":
        setQuestions(replaceQuestions(5, question));

        break;
      case "6":
        setQuestions(replaceQuestions(6, question));

        break;
    }
  };

  const handleValidate = () => {
    const newText = {
      titre: _titre.value,
      images: images,
      phrases: sentences,
      questions: questions
    };
    dispatch(addText(newText))
  };
  

  return (
    <div>
      <Button
        as={Link}
        to="/main-admin"
        variant="primary"
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
                  ref={input => _titre = input}
                    placeholder="Entrez le titre"
                    required
                    className="mb-2"
                    type="text"
                  />
                </Col>
              </Row>
              <Card className="mt-4">
                <Card.Header as="h2"> Images </Card.Header>
                <Card.Body className="p-4">
                  <Image addImage={handleAddImage} />

                  <Row className="mt-3">
                    <Col>
                      {images.map((i) => (
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
                  {sentences.map((s) => (
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

              <Question number="1" handleChangeQuestion={handleChangeQuestion}/>
              <Question number="2" handleChangeQuestion={handleChangeQuestion}/>
              <Question number="3" handleChangeQuestion={handleChangeQuestion}/>
              <Question number="4" handleChangeQuestion={handleChangeQuestion}/>
              <Question number="5" handleChangeQuestion={handleChangeQuestion}/>
              <Question number="6" handleChangeQuestion={handleChangeQuestion}/>

              <Row className="text-end mb-5 mt-4">
                <Col>
                  <Button onClick={handleValidate} variant="primary">Valider</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default TextInfos;
