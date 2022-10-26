import React, { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { addText } from "/src/redux.jsx";
import QuestionAdded from "../../Components/Admin/QuestionAdded";

function TextInfos(props) {
  const connectedUser = useSelector((state) => state.sessionUser);
  const texts = useSelector((state) => state.texts);
  const dispatch = useDispatch();
  let textInUse;

  if (connectedUser.editMode == false) {
    textInUse = texts[texts.length - 1];
  }
  //State principal
  const [text, setText] = useState(textInUse);
  const [images, setImages] = useState(text.images);
  const [sentences, setSentences] = useState(text.phrases);
  const [questions, setQuestions] = useState(text.questions);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setText((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

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
      answerChoices: []
    };
    console.log(newQuestion);
    setQuestions((prevValue) => {
      return [...prevValue, newQuestion];
    });
    
  };
  const handleRemoveQuestion = (id) => {
    setQuestions((prevValues) => {
      return prevValues.filter((q) => {
        return q.id != id;
      });
    });
  };

  //Test asnwerchoices
  const [answerChoices, setAnswerChoices] = useState(props.question.answerChoices);
  const handleAddAnswerChoice = (answerChoice) => {
    const newAnswerChoice = {
      id: v4(),
      text: answerChoice.text,
      audio: answerChoice.audio,
      image: answerChoice.image,
    };
    console.log(newAnswerChoice);
    setAnswerChoices((prevValue) => {
      return [...prevValue, newAnswerChoice];
    });
   
    console.log(answerChoices);
    // setQuestion(prevValue => {return {...prevValue, answerChoices: answerChoices}});
    

  };
  const handleRemoveAnswerChoice = (id) => {
    setAnswerChoices((prevValues) => {
      return prevValues.filter((a) => {
        return a.id != id;
      });
    });
  };





  //A retravailler

  // const replaceQuestions = (id, question) => {
  //   const questionsCopy = questions;
  //   const index = questions.findIndex((q) => q.id == id);
  //   console.log(questionsCopy);
  //   questionsCopy[index] = question;
  //   return questionsCopy;
  // };

  // const handleChangeQuestion = (question) => {
  //   switch (question.id) {
  //     case "1":
  //       setQuestions(replaceQuestions(1, question));
  //       break;
  //     case "2":
  //       setQuestions(replaceQuestions(2, question));

  //       break;
  //     case "3":
  //       setQuestions(replaceQuestions(3, question));

  //       break;
  //     case "4":
  //       setQuestions(replaceQuestions(4, question));

  //       break;
  //     case "5":
  //       setQuestions(replaceQuestions(5, question));

  //       break;
  //     case "6":
  //       setQuestions(replaceQuestions(6, question));

  //       break;
  //   }
  // };
  
  const handleValidate = () => {
    const newText = {
      titre: text.titre,
      audioTitre: text.audioTitre,
      imageTitre: text.imageTitre,
      images: images,
      phrases: sentences,
      questions: questions,
    };
    console.log(newText);
    //dispatch(addText(newText));
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
                    value={text.titre}
                    name="titre"
                    onChange={handleChange}
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
                        name="audioTitre"
                        value={text.audioTitre}
                        onChange={handleChange}
                        className="mb-3"
                        type="file"
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
                        value={text.imageTitre}
                        onChange={handleChange}
                        className="mb-3"
                        type="file"
                      />
                    </Col>
                  </Row>
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
              <Card className="mt-4">
                <Card.Header as="h2"> Questions </Card.Header>
                <Card.Body className="p-4">
                  <Question handleAddQuestion={handleAddQuestion} />
                  <hr />
                  
               {questions.map(q => <QuestionAdded key={q.id} question={q} questions={questions} setQuestions={setQuestions} handleRemoveQuestion={handleRemoveQuestion}/>)}
                  
                </Card.Body>
              </Card>
              {/* {connectedUser.editMode == true ? (<><Question
                number="1"
                question={connectedUser.textInUse.questions[0]}
                handleChangeQuestion={handleChangeQuestion} /><Question
                  number="2"
                  question={connectedUser.textInUse.questions[1]}
                  handleChangeQuestion={handleChangeQuestion} /><Question
                  number="3"
                  question={connectedUser.textInUse.questions[2]}
                  handleChangeQuestion={handleChangeQuestion} /><Question
                  number="4"
                  question={connectedUser.textInUse.questions[3]}
                  handleChangeQuestion={handleChangeQuestion} /><Question
                  number="5"
                  question={connectedUser.textInUse.questions[4]}
                  handleChangeQuestion={handleChangeQuestion} /><Question
                  number="6"
                  question={connectedUser.textInUse.questions[5]}
                  handleChangeQuestion={handleChangeQuestion} /></>): <><Question
                  number="1"
                  
                  handleChangeQuestion={handleChangeQuestion} /><Question
                    number="2"
                    
                    handleChangeQuestion={handleChangeQuestion} /><Question
                    number="3"
                    
                    handleChangeQuestion={handleChangeQuestion} /><Question
                    number="4"
                   
                    handleChangeQuestion={handleChangeQuestion} /><Question
                    number="5"
                   
                    handleChangeQuestion={handleChangeQuestion} /><Question
                    number="6"
                   
                    handleChangeQuestion={handleChangeQuestion} /></>} */}

              <Row className="text-end mb-5 mt-4">
                <Col>
                  <Button onClick={handleValidate} variant="primary">
                    Valider
                  </Button>
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
